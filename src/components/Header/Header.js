import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

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
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/course'>Course</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li>{
                            user?.email ?
                                <button onClick={handelLogout} className='btn btn-sm'>Log Out</button>
                                : <div className='mr-4 font-bold'>
                                    <Link to='/login'>Login</Link>
                                </div>
                        }</li>
                        <li><Link to='/register'>Register</Link></li>
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
                    <li>{
                        user?.uid ?
                            <Link onClick={handelLogout} className=''>Log Out</Link>
                            : <div className='mr-4 font-bold'>
                                <Link to='/login'>Login</Link>
                            </div>
                    }</li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
                <label className="label cursor-pointer">
                    <input type="checkbox" className="toggle toggle-primary" checked />
                </label>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Header;