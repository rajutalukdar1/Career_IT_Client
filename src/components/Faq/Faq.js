import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg?auto=webp&quality=95&crop=16:9&width=675" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                    <div className="space-y-2">
                        <Link className="inline-block text-2xl font-semibold sm:text-3xl">Looking to become a front-end web developer?</Link>
                        <p className="text-xs dark:text-gray-400">By
                            <Link to="https://web.facebook.com/Rajuvai013" className="text-xs hover:underline text-red-500"> Md Raju Talukdar </Link>
                        </p>
                    </div>
                    <div className="dark:text-gray-100">
                        <p>We have put together a course that includes all the essential information you need to work towards your goal.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;