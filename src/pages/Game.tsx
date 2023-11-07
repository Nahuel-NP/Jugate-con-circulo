import { useEffect, useState } from "react";
import { useSensor, MouseSensor, TouchSensor, useSensors, DragEndEvent, DndContext, closestCenter } from '@dnd-kit/core';
import { Droppable } from "../components/DragAndDrop/Droppable";
import { Draggable } from "../components/DragAndDrop/Draggable";
import CirculeroCard from "../components/CirculeroCard";
import { useModalStore } from "../store/modalStore";
import { useGameStore } from "../store/gameStore";
import { useRandomCirculeros } from "../hooks/useRandomCirculeros";
import { useVerifyAnswer } from "../hooks/useVerifyAnswer";
import { useTutorialModal } from "../hooks/useTutorialModal";

import { Circulero } from '../data/circuleros';


export interface CirculerosState {
  firstCirculero: Circulero | null,
  secondCirculero: Circulero | null
}

const Game = () => {

  useTutorialModal()

  const setErrorModal = useModalStore((state) => (state.setErrorModal))

  const setCorrectModal = useModalStore((state)=> state.setCorrectModal)
  
  const stage = useGameStore((state) => (state.stage))
  
  const addPartner = useGameStore((state) => (state.addPartner))

  const question = useGameStore((state) => (state.currentQuestion))

  const [circuleros, setCirculeros] = useState<Array<Circulero>>()

  const { hasError, resetErrors } = useVerifyAnswer(question)

  useEffect(() => {
    const { circuleros: circuleros20} = useRandomCirculeros(stage)

    setCirculeros(circuleros20)
  }, [stage])

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
  );

  const drawEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const circuleroToAdd = circuleros!.filter(item => item.id.toString() === active.id)[0]

    if (over?.id === 'first') {
      addCirculero('first', circuleroToAdd)
    }
    if (over?.id === 'second') {
      addCirculero('second', circuleroToAdd)
    }
  }

  const firstSelectedCirculero = useGameStore(state => state.firstSelectedCirculero)
  const secondSelectedCirculero = useGameStore(state => state.secondSelectedCirculero)

  const setFirstSelectedCirculero = useGameStore((state) => (state.setFirstSelectedCirculero))
  const setSecondSelectedCirculero = useGameStore((state) => (state.setSecondSelectedCirculero))

  const addCirculero = (position: string, circulero: Circulero) => {
    if (position == 'first') {
      setFirstSelectedCirculero(circulero)
    }
    if (position == 'second') {
      setSecondSelectedCirculero(circulero)
    }
  }


  const comprobar = () => {

    if (hasError) {
      setErrorModal(true)
    } else {

      setCorrectModal(true)
      // Agrega al team
      if (question) {
        addPartner(firstSelectedCirculero!, question?.roles[0].buscado)
        addPartner(secondSelectedCirculero!, question?.roles[1].buscado)
      }
      resetErrors()
    }
    
  }

  return (
    < section className="relative z-10 flex flex-col bg-[url('/images/backgrounds/montana/front.webp')] bg-fixed bg-bottom bg-contain bg-no-repeat  items-center w-full min-h-screen py-10 lg:pt-24 md:pt-0 " style={{ viewTransitionName: 'view' }}>
      <div className="container px-8 py-4 md:mt-14">
        <DndContext sensors={sensors} autoScroll={false} collisionDetection={closestCenter} onDragEnd={drawEnd}>

          <div className="grid justify-center max-w-6xl gap-2 mx-auto text-sm xl:pb-10 lg:gap-4 xl:gap-y-12 lg:grid-cols-5">
            <div className=" lg:col-start-1 lg:col-span-2 justify-self-end  self-end w-full  min-h-[150px] max-w-sm   md:max-w-sm ">{/* seleccion 1 */}
              <Droppable id="first" >

                {
                  firstSelectedCirculero ?
                    <div className="relative flex items-center justify-center w-full p-4 bg-white h-36 before:w-full before:h-full before:absolute before:bg-c-magenta before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <CirculeroCard circulero={firstSelectedCirculero} rol={question.roles[0].buscado} />
                    </div>
                    :
                    <div className="relative flex items-center justify-center w-full p-4 h-36 bg-c-magenta before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <p className="text-white lg:text-base" dangerouslySetInnerHTML={{ __html: question ? question?.roles[0].descripcion : '' }} />
                    </div>
                }
              </Droppable>
            </div>
            <div className="my-4 lg:col-start-3 lg:row-span-2 lg:col-span-3">
              <Droppable id="grid">
                <div className="grid max-w-sm grid-cols-5 gap-2 xl:gap-4 lg:max-w-lg xl:max-w-2xl">
                  {circuleros && circuleros.map(item => (
                    <Draggable disabled={item == firstSelectedCirculero || secondSelectedCirculero == item} id={item.id.toString()} key={item.id} circulero={item} />))
                  }
                </div>
              </Droppable>
            </div>
            <div className=" lg:col-start-1  justify-self-end w-full  lg:col-span-2 relative min-h-[150px] max-w-sm  self-start  md:max-w-sm   ">{/* seleccion 2 */}
              <Droppable id="second" >
                {
                  secondSelectedCirculero ?
                    <div className="relative flex items-center justify-center w-full p-4 bg-white h-36 before:w-full before:h-full before:absolute before:bg-c-cyan before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <CirculeroCard circulero={secondSelectedCirculero} rol={question.roles[1].buscado} />
                    </div>
                    :
                    <div className="relative flex items-center justify-center w-full p-4 text-black h-36 bg-c-cyan before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <p className="text-black lg:text-base" dangerouslySetInnerHTML={{ __html: question ? question?.roles[1].descripcion : '' }} />

                    </div>
                }
              </Droppable>
            </div>
          </div>
        </DndContext>
      </div>
      <button onClick={comprobar} disabled={!firstSelectedCirculero || !secondSelectedCirculero} className="px-6 py-3 mt-4 font-bold rounded-full shadow-md shadow-black lg:mt-0 disabled:bg-gray-300 bg-c-yellow"> Continuar </button>
    </section>
  );
}

export default Game;
