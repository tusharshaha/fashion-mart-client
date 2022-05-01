import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { registerUser } from '../../../../../utils/types';

const ManageUser: React.FC = () => {
    const [users, setUsers] = useState<registerUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    // fiter for search user
    const filterUser = users.filter(ele => {
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
                        {users.length === 0 && <tr>
                            <td colSpan={4} className='py-5 text-center'>No user exists!</td>
                        </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;