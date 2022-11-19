import { useContext } from "react";
import { CounterContext } from "../../../Providers/counter";
import { useEffect } from "react";
import Switch from "@mui/material/Switch";
import VitrineCardsError from "./errors";

const Form = ({setRequest}) => {
  const {
    amount,
    installments,
    mdr,
    days,
    state,
    setState,
    callback,
    Transform,

  } = useContext(CounterContext);

  function PushValues() {
    Transform(days);
    if (days) {
      setRequest({ amount, installments, mdr, days: Transform(days) });
    } else {
      setRequest({ amount, installments, mdr });
    }
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
    <section className="flex flex-col">
      <div className="flex items-center">
        <Switch
          checked={state}
          label="Ativar dias"
          name="days"
          onChange={(event) => (state ? SetFalse(event) : setState(true))}
        />
        <label htmlFor="days">Ativar dias</label>
      </div>
      <form className="flex flex-col mb-10 space-y-4 w-full text-align-center">
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm">
            Informe o valor da venda *
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Venda Total"
            onChange={(event) => callback(event)}
            className="rounded pl-2 w-56"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="installments" className="text-sm">
            Em quantas parcelas *
          </label>
          <input
            type="number"
            name="installments"
            placeholder="Parcelas"
            onChange={(event) => callback(event)}
            className="rounded pl-2 w-56"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mdr" className="text-sm">
            Percentual de MDR *
          </label>
          <input
            type="number"
            name="mdr"
            placeholder="MDR"
            onChange={(event) => callback(event)}
            className="rounded pl-2 w-56"
          />
        </div>
        {state ? (
          <div className="flex flex-col">
            <label htmlFor="day" className="text-sm">
              Quantidade de dias *
            </label>
            <input
              type="text"
              name="day"
              placeholder="Dias em sequencia"
              onChange={(event) => callback(event)}
              className="rounded pl-2 w-56"
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
