import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='my-10 text-2xl border-orange-300 border-2 w-96 p-10 text-center mx-auto '>
            <h1>Uncle</h1>
            <p>Granpa money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Sent 1000tk</button>
            <div className='flex gap-5 justify-center'>
            <Cousin>Abir</Cousin>
            <Cousin>Habib</Cousin>
            </div>
        </div>
    );
};

export default Uncle;