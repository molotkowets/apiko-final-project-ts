import React from "react";
import "./counter.css";
import { ReactComponent as Minus } from "../../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";

interface ICounter {
    counter: number;
    setCounter: any;
}

export default function Counter({ counter, setCounter }: ICounter): JSX.Element {
    // const[count, setCount] = useState(1)

    const increase = (): void => {
        setCounter(counter + 1);
    };
    const decrease = (): void => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="counter user-select">
            <Minus
                className="counter-operator"
                onClick={() => {
                    decrease();
                }}
            />
            {/* FIXME counter > 10  */}
            <span className="quantity">{counter}</span>
            <Plus
                className="counter-operator"
                onClick={() => {
                    increase();
                }}
            />
        </div>
    );
}
