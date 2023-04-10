import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Aunty from '../Aunty/Aunty'
import Uncle from '../Uncle/Uncle'
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);


    return (
        <div className='grandpa'>
            <h3>grandpa</h3>
            <p>has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex' >
                        <Father ring={ring}></Father>
                        <Aunty></Aunty>
                        <Uncle ring={ring}></Uncle>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
1. create a context
2. create a provider and pass a value
3. use context to use a value
*/