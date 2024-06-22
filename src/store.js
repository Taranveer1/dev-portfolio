import { create } from "zustand";

const useGlobalStore = create((set) => ({
  navTitle: "",
  setNavTitle: (title) => set({ navTitle: title }),
}));

export default useGlobalStore;
