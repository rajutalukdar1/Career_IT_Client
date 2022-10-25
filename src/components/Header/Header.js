import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-gray-300">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl w-40"><img src="https://careerit.net/wp-content/uploads/2022/02/bal-01.png" alt="" /></Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;