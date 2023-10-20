import {create} from 'zustand';

interface ModalStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


export const useModalStore = create<ModalStore>((set) => ({
    isOpen: true,
    setIsOpen: (isOpen: boolean) => set({isOpen}),
}));