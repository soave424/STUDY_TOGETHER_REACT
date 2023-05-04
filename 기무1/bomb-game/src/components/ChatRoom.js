import { useStore } from "../store";

function MyTalk({ nickname, msg }) {
  return (
    <mark>
      <b>{nickname}</b>: {msg}
      <br />
    </mark>
  );
}

function OtherTalk({ nickname, msg }) {
  return (
    <>
      <b>{nickname}</b>: {msg}
      <br />
    </>
  );
}

export default function ChatRoom({ socket }) {
  const { nickname, roomName, setRoomName, msg, resetMsg, setPlay, userList } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const send_msg = e.target.querySelector("input").value;
    socket.emit("talk", { nickname, msg: send_msg });
    e.target.querySelector("input").value = "";
  };

  const handleClick = () => {
    setPlay(false);
    socket.emit("outRoom");
    setRoomName("");
    resetMsg();
  };

  return (
    <body>
      <hgroup>
        <h4>방 이름: {roomName}</h4>
        <h6>즐거운 속닥속닥👻</h6>
      </hgroup>
      <details>
        <summary>참가자({userList.length})</summary>
        {userList && (
          <ul>
            {userList.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        )}
      </details>
      <article style={{ marginTop: 0, marginBottom: 20 }}>
        {msg.map(({ id, nickname: name, msg }) => (nickname === name ? <MyTalk key={id} nickname={name} msg={msg}></MyTalk> : <OtherTalk key={id} nickname={name} msg={msg}></OtherTalk>))}
      </article>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="하고 싶은 말을 써보자!"></input>
        <button>속닥속닥💭</button>
      </form>
      <button className="secondary" onClick={handleClick}>
        나가기💨
      </button>
    </body>
  );
}
