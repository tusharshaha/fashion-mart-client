import React, { useState } from 'react';
import { registerUser } from '../../../../../utils/types';

const ManageUser: React.FC = () => {
    const [users, setUsers] = useState<registerUser[]>([]);
    return (
        <div>
            <h4 className="mb-3">Manage Users</h4>
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