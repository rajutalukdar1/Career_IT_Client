import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ course }) => {
    // console.log(course)
    const { name, img } = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary"><Link to={`/courseDetails/${course.id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Card;