import { DndContext, DragEndEvent, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core"
import { Draggable } from "./components/DragAndDrop/Draggable"
import { Droppable } from "./components/DragAndDrop/Droppable"
import { useState } from 'react';
export interface Circulero {
  id: string,
  name: string,
  zone: string
}


function App() {
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);


  const [circuleros, setCirculeros] = useState<Circulero[]>(
    [
      { name: 'Nahuel', id: '1', zone: 'partners' },
      { name: 'Nicolas', id: '2', zone: 'partners' },
      { name: 'Pedroso', id: '3', zone: 'partners' },
    ]
  )

  const [firstCirculero, setFirstCirculero] = useState<Circulero | null>(null)
  const [secondCirculero, setSecondCirculero] = useState<Circulero | null>(null)


  const sensors = useSensors(
    mouseSensor,
    touchSensor,

  );


  const drawEnd = (event: DragEndEvent) => {
    const { active, over } = event;
/*     console.log({ active });

    console.log({ over }); */
    if (over?.id === 'two') {
      setSecondCirculero(circuleros.filter(item => item.id === active.id)[0])
    }
    if (over?.id === 'one') {
      setFirstCirculero(circuleros.filter(item => item.id === active.id)[0])
    }
    if (over?.id !== 'users') {
      setCirculeros(circuleros.filter(item => item.id !== active.id))
    }

  }
  /*   const drawOver = (event: DragOverEvent) => {
      const { over, active } = event
  
      console.log({ over });
      console.log({ active });
    } */

  const removeFirstCirculero = () => {
    setCirculeros([...circuleros, firstCirculero!])
    setFirstCirculero(null)
  }
  const removeSecondCirculero = () => {
    setCirculeros([...circuleros, secondCirculero!])
    setSecondCirculero(null)
  }

  return (

    <main className="grid min-h-screen bg-slate-900 place-items-center">
      <div className="container flex flex-col items-center justify-center w-full max-w-5xl gap-4 p-8 rounded-lg md:flex-row bg-slate-300">
        <DndContext sensors={sensors} autoScroll={false} collisionDetection={closestCenter} onDragEnd={drawEnd} >
          <div className="flex flex-row w-full md:max-w-[200px] gap-8 md:flex-col ">

            <div className="w-full  min-w-[100px] border-blue-400 aspect-square">
              <Droppable id="one" disabled={firstCirculero ? true : false} >
                {
                  firstCirculero ?
                    <div className="flex flex-col items-center justify-between h-full bg-blue-300">
                      <p className="py-4">{firstCirculero.name}</p>
                      <button onClick={removeFirstCirculero} className="w-full p-2 bg-red-500">Remove</button>
                    </div>
                    : <div className="flex flex-col items-center justify-center h-full ">
                      <p>Arrastre aquí</p>
                    </div>
                }

              </Droppable>
            </div>
            <div className="w-full  min-w-[100px] border-red-400 aspect-square">
              <Droppable id="two" disabled={secondCirculero ? true : false} >
                {
                  secondCirculero ?

                    <div className="flex flex-col items-center justify-between h-full bg-red-300">
                      <p className="py-4">{secondCirculero.name}</p>
                      <button onClick={removeSecondCirculero} className="w-full p-2 bg-red-500">Remove</button>
                    </div>
                    : <div className="flex flex-col items-center justify-center h-full ">
                      <p>Arrastre aquí</p>
                    </div>
                }

              </Droppable>
            </div>
          </div>
          <div className="w-full max-w-[600px]">
            <Droppable id="users">
              <div className="grid w-full grid-cols-5 grid-rows-4 gap-2 p-2 mx-auto md:gap-4 place-items-center">
                {
                  circuleros.map(item => (
                    <Draggable id={item.id} key={item.id} circulero={item} />))
                }
              </div>
            </Droppable>
          </div>
        </DndContext>
      </div>
    </main>
  )
}

export default App
