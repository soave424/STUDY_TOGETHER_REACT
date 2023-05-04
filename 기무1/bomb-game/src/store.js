import { create } from "zustand";

export const useStore = create((set) => ({
  nickname: "",
  setNickname: (nickname) => set({ nickname }),

  count: 0,
  setCount: (count) => set({ count }),

  roomName: "",
  setRoomName: (roomName) => set({ roomName }),

  roomList: [],
  setRoomList: (roomList) => set({ roomList }),

  userList: [],
  setUserList: (userList) => set({ userList }),

  isPlaying: false,
  setPlay: (bool) => set({ isPlaying: bool }),

  msg: [],
  setMsg: (msg) => set((state) => ({ msg: [...state.msg, msg] })),
  resetMsg: () => set({ msg: [] }),
}));
