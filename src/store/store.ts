import { create } from 'zustand'

interface ThemeState {
  theme: string;
  setTheme: () => void;
}

const useStore = create<ThemeState>((set, get) => ({
  theme: "forest",
  setTheme: () => set((state) => ({
            ...state,
            theme: get().theme === "forest" ? "coffee" : "forest"
        })),
}))


export default useStore;
export const useTheme = () => useStore((state) => state.theme);
export const useSetTheme = () => useStore((state) => state.setTheme);


