import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsInventory = () => {
    const {productId} = useParams();
    return (
        <div>
            <h2>Welcome to detail:{productId}</h2>
            <h3>Name:</h3>
        </div>
    );
};

export default DetailsInventory;