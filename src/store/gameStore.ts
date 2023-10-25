import { create } from 'zustand';
import { Circulero } from '../data/circuleros';


interface GameStore {
  stage: number;
  team:Array<Partner>;
  increment: () => void;
  restoreStage: () => void;
  addPartner: (partner: Circulero, rol: string) => void;
}

interface Partner{
  rol:string;
  circulero:Circulero;
}



export const useGameStore = create<GameStore>((set) => ({
  stage: 0,
  increment: () => set((state) => ({ stage: state.stage + 1 })),
  restoreStage: () => set({ stage: 0 }),
  team:[],
  addPartner: (partner:Circulero,rol:string) => set((state) => ({ team: [...state.team, {circulero:partner,rol}]}))



}));