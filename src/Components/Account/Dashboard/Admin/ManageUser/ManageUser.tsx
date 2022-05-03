import { GraphQLClient } from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { delete_user, get_all_user, update_user_role } from '../../../../../graphql/schema';
import { RootState } from '../../../../../redux/store';
import { GRAPHQL_URL } from '../../../../../utils/BaseUrl';
import { registerUser } from '../../../../../utils/types';

const ManageUser: React.FC = () => {
    const [users, setUsers] = useState<registerUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);
    const [menu, setMenu] = useState<string>("user");
    const [search, setSearch] = useState<string>("");
    const { token } = useSelector((state: RootState) => state.authUser.value);
    const client = new GraphQLClient(GRAPHQL_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    useEffect(() => {
        (async () => {
            setLoading(true);
            await client.request<{ allUsers: registerUser[] }>(get_all_user)
                .then(res => { setUsers(res.allUsers) })
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: err.response.errors[0].message
                    })
                })
                .finally(() => setLoading(false));
        })()
        // eslint-disable-next-line
    }, [update])
    const handleUserRole = async (email: string, role: string) => {
        setLoading(true);
        await client.request(update_user_role, { email, role })
            .then(res => {
                if (res.updateUserRole) {
                    setUpdate(!update);
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Changed Role",
                        showConfirmButton: false,
                        timer: 1800
                    })
                }
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: err.response.errors[0].message
                })
            }).finally(() => setLoading(false));
    }
    const handleDeleteUser = async (email: string) => {
        setLoading(true);
        Swal.fire({
            icon: "warning",
            title: 'Are you sure you want to delete this user?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await client.request(delete_user, { email })
                    .then(res => {
                        if (res.deleteUser) {
                            Swal.fire({
                                icon: "success",
                                title: "Successfully deleted user",
                                showConfirmButton: false,
                                timer: 1800
                            })
                            setUpdate(!update)
                        }
                    }).catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: err.response.errors[0].message
                        })
                    }).finally(() => setLoading(false))
            }
        })
    }
    // filter by menu
    const filterRole = users.filter(ele => ele.role === menu);
    // fiter for search user
    const filterUser = filterRole.filter(ele => {
        if (search !== "") {
            return ele.userName.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
        }
        return true;
    })
    return (
        <div>
            <div className="mb-3 d-flex align-items-center justify-content-between">
                <h4>Manage Users</h4>
                <div className='search_input'>
                    <input
                        type="text"
                        placeholder='Search by Name'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <BsSearch className="search_icon" />
                </div>
            </div>
            {/* menu for view user and admin  */}
            <div className='d-flex align-items-center justify-content-center mb-3'>
                <Button
                    variant={menu === "user" ? "danger" : "dark"}
                    className='me-3 px-4'
                    onClick={() => setMenu("user")}
                >
                    User
                </Button>
                <Button
                    variant={menu === "admin" ? "danger" : "dark"}
                    className='px-4'
                    onClick={() => setMenu("admin")}
                >
                    Admin
                </Button>
            </div>
            {loading && <div className='mb-3 text-center'>
                <Spinner
                    animation="border"
                    variant="danger"
                    className="p-3"
                />
            </div>}
            <div className='cus_td_container'>
                <table className='cus_table text-center'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {filterUser.length === 0 && <tr>
                            <td colSpan={4} className='py-5 text-center'>No user exists!</td>
                        </tr>}
                        {
                            filterUser.map((user) => <tr key={user._id}>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Form.Control
                                        as="select"
                                        defaultValue={user.role}
                                        onChange={(e) => handleUserRole(user.email, e.target.value)}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </Form.Control>
                                </td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDeleteUser(user.email)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;