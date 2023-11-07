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
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')
  const stage = useGameStore(state => state.stage)
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setShowBar(false)
        setBackgroundPosition('0%,0%')
        break;
      case '/situation':
        setShowBar(false)
        setBackgroundPosition('25%,0%')
        break;
      case '/game':
        setBackgroundPosition('50%,0%')
        setShowBar(true)
        break;

      default:
        break;
    }

  }, [location]);



  const tutorialModal = useModalStore(state => state.tutorialModal)
  const errorModal = useModalStore(state => state.errorModal)
  const correctModal = useModalStore(state => state.correctModal)
  const currentQuestion = useGameStore(state => state.currentQuestion)

  return (
    <main className="relative overflow-hidden bg-fixed bg-center bg-cover bg-montana saturate-[1.25] font-rubik">
      <div style={{
        background: 'linear-gradient(90deg, rgba(29, 183, 179, 0.60) 0%, rgba(45, 169, 182, 0.50) 4%, rgba(88, 132, 188, 0.50) 12%, rgba(145, 83, 197, 0.50) 20%, rgba(145, 83, 197, 0.50) 30%, rgba(53, 19, 96, 0.50) 40%, rgba(53, 19, 96, 0.50) 50%, rgba(29, 183, 179, 0.50) 60% )',
        transition: 'background 1500ms linear',
        backgroundPosition,
        backgroundSize: '500% 100%'
      }} >

        {showBar && <div style={{ viewTransitionName: 'rocket' }}
          className="absolute top-0 left-0 z-50 grid  w-full h-16 grid-cols-4 md:grid-cols-2  animate-fade-left animate-once animate-duration-500 animate-delay-[1000ms] animate-ease-linear lg:h-28  ">
          <div className={`${stage === 0 ? 'col-start-2' : 'col-span-2'} +' col-span-3 relative bottom-0 left-0 w-full h-0  border-b-8 border-dotted border-c-cyan transition-[border]'`} />
          <div className="relative items-center justify-center hidden col-start-1 row-start-1 mx-auto lg:flex ">
            <p className=" text-c-yellow">{currentQuestion.pregunta}
              <span className="px-4 py-2 ml-2 text-white uppercase shadow-md bg-c-magenta shadow-black ">{currentQuestion.roles[0].buscado}</span>
              <span className="mx-2 text-lg font-bold text-white shadow-md">+</span>
              <span className="px-4 py-2 text-black uppercase shadow-md bg-c-cyan shadow-black">{currentQuestion.roles[1].buscado}</span>
            </p>
          </div>
          <div className="flex justify-end col-span-4 col-start-1 row-start-1 gap-1 py-4 md:col-span-2 lg:justify-center lg:col-start-2">
            {
              ["1a", "2a", "3a", "4a", "5a"].map((item, index) =>
                <>
                  {(stage > index) ?
                    <img key={item} src="/images/icons/star-correct.svg" alt="full star" className="max-w-[30px] lg:max-w-[50px] animate-jump animate-thrice animate-duration-500 animate-delay-500" />
                    :
                    <img key={item + index} src="/images/icons/star-false.svg" alt="empty star" className="max-w-[30px] lg:max-w-[50px]" />}
                </>
              )}
          </div>
          <img src="/images/rocket.gif" alt="rocket" className="absolute z-50 w-full 2xl:max-w-[200px] lg:max-w-[170px] max-w-[150px] -translate-x-1/3  top-full lg:top-2/3 -translate-y-1/2 lg:-translate-y-1/3 left-1/4 md:left-1/2" />
        </div>
        }
        {showBar && 

            <p className="w-full text-center lg:hidden pt-28 text-c-yellow">{currentQuestion.pregunta}
              <span className="px-4 py-2 ml-2 text-white uppercase shadow-md bg-c-magenta shadow-black ">{currentQuestion.roles[0].buscado}</span>
              <span className="mx-2 text-lg font-bold text-white shadow-md">+</span>
              <span className="px-4 py-2 text-black uppercase shadow-md bg-c-cyan shadow-black">{currentQuestion.roles[1].buscado}</span>
            </p>
  
        }

        {/* <img style={{ viewTransitionName: 'mountains' }} src="/images/backgrounds/montana/front.webp" className="fixed bottom-0 w-full " loading="lazy" decoding="async" alt="mountains" /> */}
        <Outlet />
      </div>
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