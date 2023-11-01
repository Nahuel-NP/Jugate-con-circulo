import { Outlet, useLocation } from "react-router-dom";
import { useModalStore } from "../store/modalStore";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import TutorialModal from "../components/modals/TutorialModal";
import FailModasl from "../components/modals/FailModasl";
import { useGameStore } from "../store/gameStore";
import CorrectModal from "../components/modals/CorrectModal";

const MainLayout = () => {

  const location = useLocation()

  const [showBar, setShowBar] = useState(false)
  const stage = useGameStore(state => state.stage)
  useEffect(() => {

    if (location.pathname === '/game') {
      setShowBar(true)
    } else {
      setShowBar(false)
    }

  }, [location]);

  const tutorialModal = useModalStore(state => state.tutorialModal)
  const errorModal = useModalStore(state => state.errorModal)
  const correctModal = useModalStore(state => state.correctModal)
  const currentQuestion = useGameStore(state => state.currentQuestion)

  return (
    <main className="relative bg-fixed bg-center bg-cover bg-montana font-rubik">
      {showBar && <div style={{ viewTransitionName: 'rocket' }} className="absolute top-0 left-0 z-50 grid  w-full h-16 grid-cols-2  animate-fade-down animate-once animate-delay-[1500ms] animate-ease-linear lg:h-28 border-b-8 border-c-cyan border-dotted ">
        <div className="items-center justify-center hidden col-start-1 row-start-1 mx-auto lg:flex ">
          <p className=" text-c-yellow">{currentQuestion.pregunta}
            <span className="px-4 py-2 ml-2 text-white uppercase shadow-md bg-c-magenta shadow-black ">{currentQuestion.roles[0].buscado}</span>
            <span className="mx-2 text-lg font-bold text-white shadow-md">+</span>
            <span className="px-4 py-2 text-black uppercase shadow-md bg-c-cyan shadow-black">{currentQuestion.roles[1].buscado}</span>
          </p>
        </div>
        <div className="flex justify-end col-span-2 col-start-1 row-start-1 gap-1 py-4 lg:justify-center lg:col-start-2">
          {
            ["1", "2", "3", "4", "5"].map((item, index) =>
              <>
                {(stage > index) ? <img key={item} src="/images/icons/star-correct.svg" alt="full star" className="max-w-[50px] animate-jump animate-thrice animate-duration-500 animate-delay-500" />
                  :
                  <img key={item} src="/images/icons/star-false.svg" alt="empty star" className="max-w-[50px]" />}
              </>
            )}
        </div>
        <img src="/images/rocket.gif" alt="rocket" className="absolute z-50 w-full 2xl:max-w-[200px] lg:max-w-[170px] max-w-[150px] -translate-x-1/2  top-full -translate-y-1/2 left-1/4 md:left-1/2" />
      </div>}
      <Outlet />
      <img style={{ viewTransitionName: 'mountains', zIndex: 10 }} src="/images/backgrounds/montana/front.webp" className="fixed bottom-0 w-full " loading="lazy" decoding="async" alt="mountains" />
      {
        tutorialModal &&
        <Modal>
          <TutorialModal />
        </Modal>
      }

      {
        errorModal &&
        <Modal bgClass="bg-black">
          <FailModasl />
        </Modal>

      }
      {correctModal &&
        <Modal>
          <CorrectModal />
        </Modal>}
    </main>
  );
}

export default MainLayout;