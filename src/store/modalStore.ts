import {create} from 'zustand';

interface ModalStore {
    tutorialModal: boolean;
    setTutorialModal: (tutorialModal: boolean) => void;
    errorModal:boolean;
    setErrorModal: (tutorialModal: boolean) => void;
    correctModal:boolean;
    setCorrectModal: (tutorialModal: boolean) => void;
}


export const useModalStore = create<ModalStore>((set) => ({
    tutorialModal: false,
    setTutorialModal: (tutorialModal: boolean) => set({tutorialModal}),
    errorModal: false,
    setErrorModal: (errorModal: boolean) => set({errorModal}),
    correctModal: false,
    setCorrectModal: (correctModal: boolean) => set({correctModal})
}));