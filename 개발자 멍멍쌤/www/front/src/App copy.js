import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(curArray => [toDo, ...curArray]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className={styles.title}>개발자 멍멍쌤 프로그램 ({toDos.length})</h1>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item,index)=><li key={index}>{item}</li>)}
    </div>
  );
}

export default App;
