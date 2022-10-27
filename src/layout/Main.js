import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='footer-Container'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;