import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import MakeName from "./components/MakeName";
import MakeRoom from "./components/MakeRoom";
import SelectRoom from "./components/SelectRoom";
import ChatRoom from "./components/ChatRoom";

import { useStore } from "./store";

function App() {
  const [socket, setSocket] = useState();
  const { nickname, setCount, roomList, setRoomList, isPlaying, setPlay, setMsg, resetMsg, setUserList } = useStore();

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);
    newSocket.on("talk", (payload) => {
      setMsg(payload);
    });
    newSocket.on("userCount", ({ count }) => {
      setCount(count);
    });
    newSocket.on("roomList", ({ roomList }) => {
      setRoomList(roomList);
    });
    newSocket.on("deleteRoom", () => {
      alert("방장이 방을 나가서 방이 사라졌습니다! 😥");
      resetMsg();
      setPlay(false);
      setUserList([]);
    });
    newSocket.on("updateUser", (arr) => {
      setUserList(arr);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>🥝키위의 속닥속닥🙈</h1>
      <article>
        <MakeName socket={socket} />
        <hr />
        {nickname && !isPlaying && <MakeRoom socket={socket} />}
        {nickname && !isPlaying && roomList.length !== 0 && <SelectRoom socket={socket} />}
        {isPlaying && <ChatRoom name={nickname} socket={socket}></ChatRoom>}
      </article>
    </>
  );
}

export default App;
