import { useState } from "react";
import { useStore } from "../store";

export default function MakeName({ socket }) {
  const [hidden, setHidden] = useState(true);
  const { nickname, setNickname, count } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nickname = e.target.querySelector("input").value;
    socket.emit("makeName", nickname, (res) => {
      if (res) {
        setNickname(nickname);
        setHidden(false);
        e.target.setAttribute("hidden", "");
      } else {
        alert("중복된 닉네임입니다!");
      }
    });
  };

  return (
    <body>
      <form onSubmit={handleSubmit}>
        <hgroup>
          <h4>대화명</h4>
          <h6>어떤 이름을 사용할거야?</h6>
        </hgroup>
        <input autoComplete="off" required></input>
        <button>다음</button>
      </form>
      <hgroup hidden={hidden}>
        <h4>반가워~ {nickname}!</h4>
        <h6>현재 모두 {count}명이 속닥속닥 중이야!</h6>
      </hgroup>
    </body>
  );
}
