import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import VitrineCardsError from "./errors";

const Form = ({ setRequest }) => {
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
      console.log(event.target.value);
      setInstallments(event.target.value);
    } else if (event.target.name === "mdr") {
      setMdr(event.target.value);
    } else {
      setDay(event.target.value);
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
  function PushValues() {
    Transform(days);
    console.log(days);
    if (days) {
      setRequest({ amount, installments, mdr, days: Transform(days) });
    } else{
      setRequest({ amount, installments, mdr });
    }
    //if ((amount !== null) & (installments !== null) & (mdr !== null)) {
    //  setRequest({ amount, installments, mdr });
    //}
  }
  useEffect(() => {
    PushValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, mdr, amount, installments]);
  function SetFalse(event) {
    setState(false);
    callback(event);
    PushValues();
  }

  return (
    <section className="flex flex-col ">
      <Switch
        checked={state}
        label="Dias"
        name="day"
        onChange={(event) => (state ? SetFalse(event) : setState(true))}
      />
      <form className="flex flex-col mb-10 space-y-4 w-full text-align-center">
        <div className="">
          <label htmlFor="amount" className="text-sm">
            Informe o valor da venda *
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Venda Total"
            onChange={(event) => callback(event)}
            className="rounded"
          />
        </div>
        <div>
          <label htmlFor="installments" className="text-sm">
            Em quantas parcelas *
          </label>
          <input
            type="number"
            name="installments"
            placeholder="Parcelas"
            onChange={(event) => callback(event)}
            className="rounded"
          />
        </div>
        <div>
          <label htmlFor="mdr" className="text-sm">
            percentual de MDR *
          </label>
          <input
            type="number"
            name="mdr"
            placeholder="MDR"
            onChange={(event) => callback(event)}
            className="rounded"
          />
        </div>
        {state ? (
          <div>
            <label htmlFor="day" className="text-sm">
              quantidade de dias
            </label>
            <input
              type="text"
              name="day"
              placeholder="Quantidade de dias"
              onChange={(event) => callback(event)}
              className="rounded"
            />
          </div>
        ) : null}
      </form>
      <VitrineCardsError
        amount={amount}
        installments={installments}
        mdr={mdr}
        days={days}
        Transform={Transform}
      />
    </section>
  );
};

export default Form;
