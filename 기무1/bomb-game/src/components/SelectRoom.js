import { useStore } from "../store";

export default function SelectRoom({ socket }) {
  const { roomList, setRoomName, setPlay } = useStore();

  const handleSubmit = (e) => {
    const roomName = e.target.id;
    socket.emit("enterRoom", roomName, (res) => {
      if (res) {
        setPlay(true);
        setRoomName(roomName);
        e.target.setAttribute("hidden", "");
      } else {
        alert("방이 존재하지 않습니다!");
      }
    });
  };

  return (
    <body>
      <hgroup>
        <h4>방 고르기</h4>
        <h6>존재하는 방에 들어도 좋아!</h6>
      </hgroup>
      {roomList &&
        roomList.map((room) => (
          <button key={room} id={room} className="outline" onClick={handleSubmit}>
            방 이름: {room} ✈
          </button>
        ))}
    </body>
  );
}
