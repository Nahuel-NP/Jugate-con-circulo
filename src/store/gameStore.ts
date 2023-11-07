import { create } from 'zustand';
import { Circulero, Question, preguntas } from '../data/circuleros';
// import zukeeper from 'zukeeper';

interface GameStore {
  stage: number;
  team: Array<Partner>;
  incrementLevel: () => void;
  restoreStage: () => void;
  addPartner: (partner: Circulero, rol: string) => void;
  hasError: boolean;
  firstError: Error | null;
  secondError: Error | null;
  setHasError: (hasError: boolean) => void;
  setFirstError: (first: Error | null) => void;
  setSecondError: (second: Error | null) => void;
  currentQuestion: Question;
  resetQuestion: () => void;
  firstSelectedCirculero:Circulero | null;
  secondSelectedCirculero: Circulero | null;
  setFirstSelectedCirculero: (circulero: Circulero | null) => void;
  setSecondSelectedCirculero: (circulero: Circulero | null) => void;
  resetSelectedCirculeros: () => void;
}

interface Partner {
  rol: string;
  circulero: Circulero;
}



interface Error {
  title: string;
  content: string;
}



export const useGameStore = create<GameStore>((set) => ({
  stage: 0,
  incrementLevel: () => set((state) => ({ stage: ++state.stage,currentQuestion: preguntas[state.stage]})),
  restoreStage: () => set({ stage: 0,currentQuestion: preguntas[0]  }),
  team: [],
  addPartner: (partner: Circulero, rol: string) => set((state) => ({ team: [...state.team, { circulero: partner, rol }] })),
  hasError: false,
  firstError: null,
  secondError: null,
  setHasError: (hasError) => set({ hasError }),
  setFirstError: (firstError) => set({ firstError }),
  setSecondError: (secondError) => set({ secondError }),
  currentQuestion: preguntas[0],
  resetQuestion: () => set({ currentQuestion: preguntas[0],stage:0 }),
  firstSelectedCirculero: null,
  secondSelectedCirculero: null,
  setFirstSelectedCirculero: (firstSelectedCirculero) => set({ firstSelectedCirculero }),
  setSecondSelectedCirculero: (secondSelectedCirculero) => set({ secondSelectedCirculero }),
  resetSelectedCirculeros: () => set({ firstSelectedCirculero: null, secondSelectedCirculero: null }),
  
}
));








