import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const singleCard = useLoaderData();
    const { name, img, title, details } = singleCard;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto mt-4">
            <figure><img className='w-72' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h1 className="text-center text-4xl font-bold">{name}</h1>
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" to='/course'>Back to Course</Link>
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;