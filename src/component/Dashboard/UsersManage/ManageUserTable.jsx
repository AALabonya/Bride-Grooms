import React from 'react';
import { MdWorkspacePremium } from "react-icons/md";
const ManageUserTable = ({ userData }) => {
    return (
        <div>
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white">

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">User Name</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>{userData.className}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{userData.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{userData.userEmail}</p>

                                    </td>

                                    <td className="p-1">

                                        <div className="flex items-center bg-pink-500 py-2 rounded-md text-white">
                                            <MdWorkspacePremium className="md:text-2xl" />
                                            <button className="text-lg">Make Premium</button>
                                        </div>

                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUserTable;
