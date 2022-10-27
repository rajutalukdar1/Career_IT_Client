import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaUser } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log('context', user);
    // console.log(user.displayName);

    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="navbar header-container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <div className='avatar'>
                            {
                                user?.photoURL ?
                                    <img className='rounded-full mt-3 ml-4' style={{ height: '45px', width: '45px' }} src={user.photoURL} alt="" />
                                    : <FaUser></FaUser>
                            }
                        </div>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/course'>Course</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li>{
                            user?.email ?
                                <Link onClick={handelLogout} className=''>Log Out</Link>
                                : <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }</li>


                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle toggle-primary" checked />
                        </label>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl w-40"><img src="https://careerit.net/wp-content/uploads/2022/02/bal-01.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/course'>Course</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li>{user?.displayName && <p>{user.displayName}</p>}</li>
                    <li>{
                        user?.uid ?
                            <Link onClick={handelLogout} className=''>Log Out</Link>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }</li>

                </ul>
                <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800 font-bold">
                    <span>Light</span>
                    <span className="relative">
                        <input id="Toggle2" type="checkbox" className="hidden peer" />
                        <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
                        <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
                    </span>
                    <span>Dark</span>
                </label>
                <div>
                    <Link>
                        <div className='avatar'>
                            {
                                user?.photoURL ?
                                    <img className='rounded-full mt-3 ml-4' style={{ height: '45px', width: '45px' }} src={user.photoURL} alt="" />
                                    : <FaUser></FaUser>
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;