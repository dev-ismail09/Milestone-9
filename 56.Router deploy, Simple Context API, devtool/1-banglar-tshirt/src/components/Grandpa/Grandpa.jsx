import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const GoldContext = createContext("golden ring");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "dimond";
  const [money, setMoney] = useState(0);

  return (
    <div className="my-10 text-2xl border-orange-300 border-2 p-10 mx-10 text-center">
      <h1>Grandpa</h1>
      <p>Has Money: {money}</p>


      <MoneyContext.Provider value={[money, setMoney]}>
        <GoldContext.Provider value="golden ring">
          <div className="flex justify-center gap-2">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </div>
        </GoldContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * Step 1: Create the context & export
 * Step 2: Use the context
 * Step 3: Provide the context
 */
