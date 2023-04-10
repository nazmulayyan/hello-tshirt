import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({Children, hasFriend, ring}) => {
    return (
        <div>
            <h2>cousin</h2>
            <p>{Children}</p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;