import { create } from "zustand";

interface UserStore {
  userInfo: {
    nickname: string;
    profileImage: string;
  };
  setUserInfo: (userInfo: { nickname: string; profileImage: string }) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userInfo: {
    nickname: "",
    profileImage: "",
  },
  setUserInfo: (userInfo: { nickname: string; profileImage: string }) =>
    set({ userInfo }),
}));

export default useUserStore;
