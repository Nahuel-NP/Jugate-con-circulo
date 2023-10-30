import { create } from 'zustand';
import { Circulero } from '../data/circuleros';
import zukeeper from 'zukeeper';

interface GameStore {
  stage: number;
  team: Array<Partner>;
  increment: () => void;
  restoreStage: () => void;
  addPartner: (partner: Circulero, rol: string) => void;
  hasError: boolean;
  firstError: Error | null;
  secondError: Error | null;
  setHasError: (hasError: boolean) => void;
  setFirstError: (first: Error | null) => void;
  setSecondError: (second: Error | null) => void;
}

interface Partner {
  rol: string;
  circulero: Circulero;
}



interface Error {
  title: string;
  content: string;
}



export const useGameStore = create<GameStore>(zukeeper(set => ({
  stage: 0,
  increment: () => set((state) => ({ stage: state.stage + 1 })),
  restoreStage: () => set({ stage: 0 }),
  team: [],
  addPartner: (partner: Circulero, rol: string) => set((state) => ({ team: [...state.team, { circulero: partner, rol }] })),
  hasError: false,
  firstError: null,
  secondError: null,
  setHasError: (hasError) => set({ hasError }),
  setFirstError: (firstError) => set({ firstError }),
  setSecondError: (secondError) => set({ secondError })
})))





