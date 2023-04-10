import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
            <h2>this is home: {tShirts.length}</h2>
        </div>
    );
};

export default Home;