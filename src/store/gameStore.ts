import { create } from 'zustand';


interface GameStore {
  stage: number;
  increment: () => void;
  restoreStage: () => void;
}


export const useGameStore = create<GameStore>((set) => ({
  stage: 1,
  increment: () => set((state) => ({ stage: state.stage + 1 })),
  restoreStage: () => set({ stage: 0 }),
}));