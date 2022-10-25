import { error } from 'daisyui/src/colors';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="navbar bg-gray-300">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl w-40"><img src="https://careerit.net/wp-content/uploads/2022/02/bal-01.png" alt="" /></Link>
            </div>
            <div>
                {user?.email && <span>welcome, {user.email}</span>}
                <div className='mr-4 font-bold'>
                    <Link to='/home'>Home</Link>
                </div>
                <div className='mr-4 font-bold'>
                    <Link to='/course'>Course</Link>
                </div>
                <div className='mr-4 font-bold'>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div className='mr-4 font-bold'>
                    <Link to='/login'>Login</Link>
                </div>
                <div className='mr-4 font-bold'>
                    <Link to='/register'>Register</Link>
                </div>
                <button onClick={handelLogout} className='btn btn-sm'>Log Out</button>
            </div>
            <div className="flex-none">
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