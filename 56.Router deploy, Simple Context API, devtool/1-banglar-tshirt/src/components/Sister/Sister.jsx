import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='my-10 text-2xl border-orange-300 border-2 p-10 text-center mx-auto '>
            <h1>Sister</h1>
            <p>Grandpa money: {money}</p>
            <button onClick={() => setMoney(money + 500) }>Sent 500tk</button>
        </div>
    );
};

export default Sister;