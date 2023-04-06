import React from "react";

function App() {
  const [counter, setCounter] = React.useState(1);
  const [number, setNumber] = React.useState();
  const [divisor, setDivisor] = React.useState([]);

  const onClick = () => {
    if (number >= counter) {
      setCounter(counter + 1);
      if (number % counter === 0) {
        setDivisor([...divisor, counter.toString()]);
      }
    }
  };
  const onChange = (e) => {
    setNumber(e.target.value);
    setCounter(1);
    setDivisor([]);
  };
  return (
    <div>
      <h1>약수를 구해봅시다.</h1>
      <h3>1. 약수를 알고 싶은 숫자를 적어봅시다. </h3>
      <input onChange={onChange}></input>
      <h3>2. 나누어지는 수를 찾아 봅시다. </h3>
      <h2>
        {number} ÷ {counter} = {parseInt(number / counter)}...{number % counter}
      </h2>
      <button onClick={onClick}>Click me</button>
      <h3>3. 약수를 적어 봅시다.</h3>
      <h3>{divisor.join(",")}</h3>
    </div>
  );
}

export default App;
