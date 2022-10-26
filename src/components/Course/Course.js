import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Course = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-1  lg:gap-4 sm:gap-1'>
            <div className=''>
                {
                    courses.map(cours => <p>
                        <Link to={`/courseDetails/${cours.id}`}>{cours.name}</Link>
                    </p>)
                }
            </div>
            <div className='lg:col-span-3 sm:col-span-1 '>
                <div className='grid lg:grid-cols-3 lg:gap-x-3 sm:gap-x-1 lg:gap-y-12 sm:gap-y-1'>
                    {
                        courses.map(course => <Card course={course}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;