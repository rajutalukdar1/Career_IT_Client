import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const singleCard = useLoaderData();
    return (
        <div>
            <p>{singleCard.name}</p>
        </div>
    );
};

export default CardDetails;