import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin>abir</Cousin>
                <Cousin ring={ring} hasFriend={true}>nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;