import {create} from 'zustand';

interface GameStore {
  count : number;
  increment: () => void;
}


export const useGameStore = create<GameStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
}));