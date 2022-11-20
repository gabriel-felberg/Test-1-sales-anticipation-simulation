import { useContext } from "react";
import { CounterContext } from "../../../Providers/counter";
import { useEffect } from "react";
import Switch from "@mui/material/Switch";
import CardError from "./errors/cardError";

const Form = ({ setRequest }) => {
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
      <form className="flex flex-col mb-10 w-full space-y-5 text-align-center ">
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
            className="rounded pl-2 w-56 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          {amount !== null ? (
            amount < 1000 ? (
              <CardError text="A venda deve ser maior que 999" />
            ) : null
          ) : null}
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
            className="rounded pl-2 w-56 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
          />
          {installments !== null ? (
            installments > 12 ? (
              <CardError text="A parcela deve ser menor que 12" />
            ) : null
          ) : null}
          {installments !== null ? (
            0 >= installments ? (
              <CardError text="A parcela deve ser maior que 1" />
            ) : null
          ) : null}
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
            className="rounded pl-2 w-56 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          {mdr !== null ? (
            0 > mdr ? (
              <CardError text="o mdr deve ser maior que 0" />
            ) : null
          ) : null}
          {mdr !== null ? (
            mdr > 100 ? (
              <CardError text="o mdr deve ser menor que 100" />
            ) : null
          ) : null}
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
              className="rounded pl-2 w-56 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            {days !== null ? (
              Transform(days)?.length <= 0 ? (
                <CardError text="Quantidade de dias deve ser maior que 0" />
              ) : null
            ) : null}
            {days !== null ? (
              Transform(days)?.length > 10 ? (
                <CardError text="Quantidade de dias deve ser menor que 10" />
              ) : null
            ) : null}
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default Form;
