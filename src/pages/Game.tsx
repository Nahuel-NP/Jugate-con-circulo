import { useState } from "react";
import { useSensor, MouseSensor, TouchSensor, useSensors, DragEndEvent, DndContext, closestCenter } from '@dnd-kit/core';
import { Circulero, circuleros } from "../data/circuleros";
import { Droppable } from "../components/DragAndDrop/Droppable";



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
    < section className="flex items-center justify-center w-full h-full pt-16 md:pt-4 saturate-150" style={{ viewTransitionName: 'view', background: 'linear-gradient(90deg, rgba(53, 19, 96, 0.50) 0%, rgba(29, 183, 179, 0.50) 100%)' }}>
      <div className="container">
        <DndContext sensors={sensors} autoScroll={false} collisionDetection={closestCenter} onDragEnd={drawEnd}>

          <div className="grid gap-8 text-sm">
            <div className="bg-c-magenta  relative min-h-[150px] max-w-xs  mx-auto md:max-w-sm before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">{/* seleccion 1 */}
              <Droppable id="one" >


                <p className="text-white">Un/a DP se encarga de dirigir la estrategia general del proyecto. Es responsable de armar el equipo, crear la propuesta y darle seguimiento a los avances.
                </p>
              </Droppable>
            </div>
            <div className="grid grid-cols-5">{/* grilla */}
            </div>
            <div className="bg-c-cyan  relative min-h-[150px] max-w-xs  mx-auto md:max-w-sm before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">{/* seleccion 2 */}
              <Droppable id="one" >
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
