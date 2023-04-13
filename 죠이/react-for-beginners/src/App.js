import React from "react";

function Divisor({ number, counter, divisor, setCounter, setDivisor }) {
  const onClick = () => {
    if (number >= counter) {
      setCounter(counter + 1);

      if (number % counter === 0) {
        setDivisor([...divisor, counter.toString()]);
      }
    }
  };

  return (
    <>
      <h2>약수 : 나누어 떨어지게 하는 수를 찾아봅시다.</h2>

      {parseInt(number / counter) === 0 ? null : (
        <>
          <h2>
            {number} ÷ {counter} = {parseInt(number / counter)}...
            {number % counter}
          </h2>
          <button onClick={onClick}>약수 찾기</button>
        </>
      )}
      <h3>
        {number}의 약수 : {divisor.join(", ")}{" "}
      </h3>
    </>
  );
}
function Multiple() {
  return <h2>배수</h2>;
}

function App() {
  const [index, setIndex] = React.useState(1);
  const [number, setNumber] = React.useState();
  const [counter, setCounter] = React.useState(0);
  const [divisor, setDivisor] = React.useState([]);

  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  const onChange = (e) => {
    setNumber(e.target.value);
    setCounter(0);
    setDivisor([]);
  };

  return (
    <div>
      <h1>약수 또는 배수를 구해봅시다.</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">약수</option>
        <option value="1">배수</option>
      </select>
      <label htmlFor="number"> 를 알고 싶은 숫자 : </label>
      <input
        id="number"
        placeholder="Number"
        type="number"
        onChange={onChange}
      ></input>
      {index === "0" ? (
        <Divisor
          number={number}
          setNumber={setNumber}
          counter={counter}
          divisor={divisor}
          setCounter={setCounter}
          setDivisor={setDivisor}
        />
      ) : null}
      {index === "1" ? <Multiple /> : null}
      {index === undefined ? <h2>선택하기</h2> : null}
    </div>
  );
}

export default App;
