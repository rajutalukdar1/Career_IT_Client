import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return (
        <div className='home'>
            <div className='text-container'>
                <h3>Welcome To Career It</h3>
                <h2>Let's Started </h2>
                <h2>Learning Skills & Upgrade Your Life</h2>
                <div>
                    <Link to='/faq' className="btn btn-active btn-secondary">GET STARTED</Link>
                    <Link to='/course' className="btn btn-outline btn-primary">OUR COURSES</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;