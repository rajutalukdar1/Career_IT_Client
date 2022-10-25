import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            this is course side
        </div>
    );
};

export default Course;