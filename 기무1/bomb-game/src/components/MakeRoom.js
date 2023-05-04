import { useStore } from "../store";

export default function MakeRoom({ socket }) {
  const { setPlay, setRoomName } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const roomName = e.target.querySelector("input").value;
    socket.emit("makeRoom", roomName, (res) => {
      if (res) {
        setPlay(true);
        setRoomName(roomName);
        e.target.setAttribute("hidden", "");
      } else {
        alert("중복된 방 이름입니다!");
      }
    });
  };
  return (
    <body>
      <form onSubmit={handleSubmit}>
        <hgroup>
          <h4>방 만들기</h4>
          <h6>새로운 방을 만들어볼래?</h6>
        </hgroup>
        <input type="text" placeholder="방 이름을 입력하세요." required></input>
        <button>🔨</button>
      </form>
      <hr />
    </body>
  );
}
