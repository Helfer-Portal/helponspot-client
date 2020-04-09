import React from "react";
import Circle from "../../components/Circle";
import "../../styles/organisation.css";

export default function Counter(props) {
  const [count, setCount] = props.countState;

  if (count === undefined) {
    setCount(0);
  }

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const infty = () => {
    setCount(-1);
  };

  return (
    <div className="flex flex-row">
      <div className="flex">
        <div onClick={decrease}>
          <Circle image="/minus.png" />
        </div>
        <div className="number">{count < 0 ? "alle" : count}</div>
        <div onClick={increase}>
          <Circle image="/plus.png" />
        </div>
        <button
          className="unlimited"
          style={{ marginLeft: 30 }}
          onClick={infty}
        >
          unbegrenzt
        </button>
      </div>
    </div>
  );
}
