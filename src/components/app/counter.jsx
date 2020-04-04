import React from "react";
import Circle from "../../components/Circle";

export default function Counter(props) {
  const [count, setCount] = props.countState;

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
  }

  return (
    <div className="flex flex-row">
      <div className="flex">
        <div onClick={decrease}>
          <Circle image="/minus.png" />
        </div>
        <div class="number">{count < 0 ? "alle" : count}</div>
        <div onClick={increase}>
          <Circle image="/plus.png" />
        </div>
        <button class="unlimited" onClick={infty}>unbegrenzt</button>
      </div>
    </div>
  );
}
