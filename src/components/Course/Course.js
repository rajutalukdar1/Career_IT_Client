import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import './Course.css'

const Course = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-4 sm:gap-1'>
            <div className='course-categories-container'>
                {
                    courses.map(course => <p
                        className='text-4xl font-bold mt-6'
                        key={course.id}
                    >
                        <Link to={`/courseDetails/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
            <div className='lg:col-span-3 sm:col-span-1 '>
                <div className='grid lg:grid-cols-2 lg:gap-x-3 sm:gap-x-1 lg:gap-y-12 sm:gap-y-1'>
                    {
                        courses.map(course => <Card course={course}
                            key={course.id}
                        ></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;