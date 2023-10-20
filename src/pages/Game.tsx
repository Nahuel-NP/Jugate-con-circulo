import { useEffect, useState } from "react";
import { useSensor, MouseSensor, TouchSensor, useSensors, DragEndEvent, DndContext, closestCenter } from '@dnd-kit/core';
import { Circulero, circuleros } from '../data/circuleros';
import { Droppable } from "../components/DragAndDrop/Droppable";
import { Draggable } from "../components/DragAndDrop/Draggable";
import CirculeroCard from "../components/CirculeroCard";
import { useModalStore } from "../store/modalStore";



export interface CirculerosState {
  firstCirculero: Circulero | null,
  secondCirculero: Circulero | null
}

const Game = () => {

  /* const [overlay,setOverlay] = useState(false); */

  const setModal = useModalStore((state) => (state.setIsOpen))
  /* const modal = useModalStore((state) => (state.isOpen)) */

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');

    if (!hasModalBeenShown) {
      setTimeout(()=>{

        setModal(true);
      },3000)
      localStorage.setItem('modalShown', 'true');
    }
  }, [setModal]);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);




  const [selectedCirculero, setSelectedCirculero] = useState<CirculerosState>({
    firstCirculero: null,
    secondCirculero: null
  })


  const sensors = useSensors(
    mouseSensor,
    touchSensor,

  );


  const drawEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const circuleroToAdd = circuleros.filter(item => item.id.toString() === active.id)[0]

    if (over?.id === 'first') {
      addCirculero('first', circuleroToAdd)
    }
    if (over?.id === 'second') {
      addCirculero('second', circuleroToAdd)
    }


  }

  const addCirculero = (position: string, circulero: Circulero) => {
    if (position == 'first') {
      setSelectedCirculero({ ...selectedCirculero, firstCirculero: circulero })
    }
    if (position == 'second') {
      setSelectedCirculero({ ...selectedCirculero, secondCirculero: circulero })
    }
  }

  return (
    < section className="z-50 flex items-center justify-center w-full min-h-screen py-24 lg:p-8 md:pt-4 saturate-150" style={{ viewTransitionName: 'view', background: 'linear-gradient(90deg, rgba(53, 19, 96, 0.50) 0%, rgba(29, 183, 179, 0.50) 100%)' }}>
      <div className="container px-8 py-4 md:mt-14">
        <DndContext sensors={sensors} autoScroll={false} collisionDetection={closestCenter} onDragEnd={drawEnd}>

          <div className="grid justify-center max-w-6xl gap-4 mx-auto text-sm xl:pb-10 lg:gap-8 xl:gap-y-12 lg:grid-cols-5">
            <div className=" lg:col-start-1 lg:col-span-2   min-h-[150px] max-w-sm   md:max-w-sm ">{/* seleccion 1 */}
              <Droppable id="first" >

                {
                  selectedCirculero.firstCirculero ?
                    <div className="relative flex items-center justify-center w-full h-full p-4 bg-white before:w-full before:h-full before:absolute before:bg-c-magenta before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <CirculeroCard circulero={selectedCirculero.firstCirculero} rol="DP" />
                    </div>
                    :
                    <div className="relative flex items-center justify-center w-full h-full p-4 bg-c-magenta before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <p className="text-white">Un/a DP se encarga de dirigir la estrategia general del proyecto. Es responsable de armar el equipo, crear la propuesta y darle seguimiento a los avances.
                      </p>
                    </div>
                }
              </Droppable>
            </div>
            <div className=" lg:col-start-3 lg:row-span-2 lg:col-span-3">
              <Droppable id="grid">
                <div className="grid max-w-sm grid-cols-5 gap-2 lg:max-w-lg xl:max-w-2xl">
                  {circuleros.map(item => (
                    <Draggable disabled={item == selectedCirculero.firstCirculero || selectedCirculero.secondCirculero == item} id={item.id.toString()} key={item.id} circulero={item} />))
                  }
                </div>
              </Droppable>
            </div>
            <div className=" lg:col-start-1  lg:col-span-2 relative min-h-[150px] max-w-sm   md:max-w-sm before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">{/* seleccion 2 */}
              <Droppable id="second" >
                {
                  selectedCirculero.secondCirculero ?
                    <div className="relative flex items-center justify-center w-full h-full p-4 bg-white before:w-full before:h-full before:absolute before:bg-c-cyan before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <CirculeroCard circulero={selectedCirculero.secondCirculero} rol="Cuentas" />
                    </div>
                    :
                    <div className="relative flex items-center justify-center w-full h-full p-4 bg-c-cyan before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <p className="text-black">
                        Un/a CUENTAS es su mano derecha. Acompaña en la organización interna y en la comunicación con el cliente para solicitar información.
                      </p>
                    </div>
                }
              </Droppable>
            </div>
          </div>
        </DndContext>
      </div>
    </section>
  );
}

export default Game;
