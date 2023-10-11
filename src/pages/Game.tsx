import { useState } from "react";
import { useSensor, MouseSensor, TouchSensor, useSensors, DragEndEvent, DndContext, closestCenter } from '@dnd-kit/core';
import { Circulero, circuleros } from "../data/circuleros";
import { Droppable } from "../components/DragAndDrop/Droppable";
import { Draggable } from "../components/DragAndDrop/Draggable";



export interface CirculerosState {
  firstCirculero: Circulero | null,
  secondCirculero: Circulero | null
}

const Game = () => {

  /* const [overlay,setOverlay] = useState(false); */


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

    if (over?.id === 'one') {
      addCirculero('first', circuleros.filter(item => item.id === active.id)[0])
    }
    if (over?.id === 'two') {
      addCirculero('second', circuleros.filter(item => item.id === active.id)[0])
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

  const removeCirculero = (position: string) => {
    if (position == 'first') {
      setSelectedCirculero({ ...selectedCirculero, firstCirculero: null })
    }
    if (position == 'second') {
      setSelectedCirculero({ ...selectedCirculero, secondCirculero: null })
    }
  }


  return (
    < section className="z-50 flex items-center justify-center w-full min-h-screen py-16 lg:p-8 md:pt-4 saturate-150" style={{ viewTransitionName: 'view', background: 'linear-gradient(90deg, rgba(53, 19, 96, 0.50) 0%, rgba(29, 183, 179, 0.50) 100%)' }}>
      <div className="container py-8 md:mt-14">
        <DndContext sensors={sensors} autoScroll={false} collisionDetection={closestCenter} onDragEnd={drawEnd}>

          <div className="grid max-w-6xl gap-4 mx-auto text-sm lg:gap-8 lg:grid-cols-5">
            <div className="bg-c-magenta lg:col-start-1 lg:col-span-2  relative min-h-[150px] max-w-xs  mx-auto md:max-w-sm before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">{/* seleccion 1 */}
              <Droppable id="first" >
                <p className="text-white">Un/a DP se encarga de dirigir la estrategia general del proyecto. Es responsable de armar el equipo, crear la propuesta y darle seguimiento a los avances.
                </p>
              </Droppable>
            </div>
            <div className="lg:col-start-3 lg:row-span-2 lg:col-span-3">
              <Droppable id="grid">
                <div className="grid max-w-sm grid-cols-5 gap-2 lg:max-w-lg xl:max-w-2xl">
                  {circuleros.map(item => (              
                    <Draggable disabled={item == selectedCirculero.firstCirculero || selectedCirculero.secondCirculero == item} id={item.id.toString()} key={item.id} circulero={item} />))
                  }
                </div>
              </Droppable>
            </div>
            <div className="bg-c-cyan lg:col-start-1  lg:col-span-2 relative min-h-[150px] max-w-xs  mx-auto md:max-w-sm before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">{/* seleccion 2 */}
              <Droppable id="second" >
                <p className="text-black">
                  Un/a CUENTAS es su mano derecha. Acompaña en la organización interna y en la comunicación con el cliente para solicitar información.
                </p>
              </Droppable>
            </div>
          </div>
        </DndContext>
      </div>
    </section>
  );
}

export default Game;
