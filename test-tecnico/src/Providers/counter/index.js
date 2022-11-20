import { createContext, useState } from "react";

export const CounterContext = createContext([]);

export const CounterProvider = ({ children }) => {

  const [amount, setAmount] = useState(null);
  const [installments, setInstallments] = useState(null);
  const [mdr, setMdr] = useState(null);
  const [days, setDay] = useState(null);
  const [state, setState] = useState(false);

  function callback(event) {
    event.preventDefault();
    if (event.target.name === "amount") {
      setAmount(event.target.value);
    } else if (event.target.name === "installments") {
      setInstallments(event.target.value);
    } else if (event.target.name === "mdr") {
      setMdr(event.target.value);
    } else {
      event.target.value === "on" ? setDay(null) : setDay(event.target.value);
    }
  }
  function Transform(day) {
    let arr = [];
    day
      ?.split(",")
      ?.map((e) =>
        e === "[" || e === "]" || e === " " || e === ","
          ? null
          : arr.push(Number(e))
      );
    return arr;
  }

  return (
    <CounterContext.Provider
      value={{
        amount,
        installments,
        mdr,
        days,
        state,
        setState,
        callback,
        Transform,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
