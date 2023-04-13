import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { create } from "zustand";

const useStore = create((set) => ({
  nickname: "",
  setNickname: (name) => set({ nickname: name }),
  msg: [],
  setMsg: (msg) => set((state) => ({ msg: [...state.msg, msg] })),
}));

function MyTalk({ nickname, msg }) {
  return (
    <mark>
      {nickname}: {msg}
      <br />
    </mark>
  );
}

function OtherTalk({ nickname, msg }) {
  return (
    <>
      {nickname}: {msg}
      <br />
    </>
  );
}

function Room({ name, socket }) {
  const { nickname, msg } = useStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    const send_msg = e.target.querySelector("input").value;
    socket.emit("talk", { nickname, msg: send_msg });
  };
  return (
    <>
      <hgroup>
        <h2>{name}님</h2>
        <h3>안녕하세요?</h3>
      </hgroup>
      <article>
        {msg.map(({ id, nickname: name, msg }) => (nickname === name ? <MyTalk key={id} nickname={name} msg={msg}></MyTalk> : <OtherTalk key={id} nickname={name} msg={msg}></OtherTalk>))}
      </article>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>보내기</button>
      </form>
    </>
  );
}

function App() {
  const [socket, setSocket] = useState();
  const { nickname, setNickname, setMsg } = useStore();

  useEffect(() => {
    const newSocket = io();
    newSocket.on("talk", (payload) => {
      setMsg(payload);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nickname = e.target.querySelector("input").value;
    socket.emit("enterRoom", nickname, (res) => {
      if (res) {
        setNickname(nickname);
        e.target.setAttribute("hidden", "");
      } else {
        alert("중복된 닉네임입니다!");
      }
    });
  };

  return (
    <>
      <h1>채팅방</h1>
      <form onSubmit={handleSubmit}>
        <article>
          <label htmlFor="room">
            대화명
            <input id="room" autoComplete="off" required></input>
          </label>
          <button>다음</button>
        </article>
      </form>
      {nickname && <Room name={nickname} socket={socket}></Room>}
    </>
  );
}

export default App;
