import { create } from 'zustand';
import { Circulero, Question, preguntas } from '../data/circuleros';
import zukeeper from 'zukeeper';

interface GameStore {
  stage: number;
  team: Array<Partner>;
  resetTeam: () => void;
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
  firstSelectedCirculero: Circulero | null;
  secondSelectedCirculero: Circulero | null;
  setFirstSelectedCirculero: (circulero: Circulero | null) => void;
  setSecondSelectedCirculero: (circulero: Circulero | null) => void;
  resetSelectedCirculeros: () => void;
  teamName:string;
  userName:string;
  setTeamName: (teamName:string) => void;
  setUserName: (userName:string) => void;
  canPass: boolean;
  setCanPass: (stage: boolean) => void;
  attemps:number;
  increaseAttemps:() => void;
  resetAttemps:() => void;
}

interface Partner {
  rol: string;
  circulero: Circulero;
}



interface Error {
  title: string;
  content: string;
}



export const useGameStore = create<GameStore>(zukeeper((set) => ({
  stage: 0,
  canPass: false,
  setCanPass: (canPass) => set({ canPass }),
  attemps:1,
  increaseAttemps:() => set((state)=>({attemps: ++state.attemps} )),
  resetAttemps:() => set({attemps:1}),
  incrementLevel: () => set((state) => {
    if (state.stage < 5) {
      return { stage: ++state.stage, currentQuestion: preguntas[state.stage] }
    }
    return { stage: 0, currentQuestion: preguntas[0] }
  }),
  restoreStage: () => set({ stage: 0, currentQuestion: preguntas[0],attemps:1}),
  team: [],
  resetTeam: () => set({ team: [] }),
  addPartner: (partner: Circulero, rol: string) => set((state) => ({ team: [...state.team, { circulero: partner, rol }] })),
  hasError: false,
  firstError: null,
  secondError: null,
  setHasError: (hasError) => set({ hasError }),
  setFirstError: (firstError) => set({ firstError }),
  setSecondError: (secondError) => set({ secondError }),
  currentQuestion: preguntas[0],
  resetQuestion: () => set({ currentQuestion: preguntas[0], stage: 0 }),
  firstSelectedCirculero: null,
  secondSelectedCirculero: null,
  setFirstSelectedCirculero: (firstSelectedCirculero) => set({ firstSelectedCirculero }),
  setSecondSelectedCirculero: (secondSelectedCirculero) => set({ secondSelectedCirculero }),
  resetSelectedCirculeros: () => set({ firstSelectedCirculero: null, secondSelectedCirculero: null }),
  teamName:'',
  userName:'',
  setTeamName:(teamName) => set({teamName}),
  setUserName:(userName) => set({userName})
}
)));








