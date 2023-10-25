import { useEffect } from 'react';
import { useModalStore } from '../store/modalStore';

export const useTutorialModal = () => {

  const setModal = useModalStore((state) => (state.setTutorialModal))

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('modalShown');

    if (!hasModalBeenShown) {
      setTimeout(() => {

        setModal(true);
      }, 3000)
      sessionStorage.setItem('modalShown', 'true');
    }
  }, [setModal]);
}

