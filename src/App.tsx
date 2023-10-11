import { DndContext, DragEndEvent, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core"
import { Draggable } from "./components/DragAndDrop/Draggable"
import { Droppable } from "./components/DragAndDrop/Droppable"
import { useState } from 'react';


export interface CirculerosState {
  firstCirculero: Circulero | null,
  secondCirculero: Circulero | null
}

function App() {
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);


  const [circuleros] = useState<Circulero[]>(
    [
      { name: 'Nahuel', id: '1', zone: 'partners' },
      { name: 'Nicolas', id: '2', zone: 'partners' },
      { name: 'Pedroso', id: '3', zone: 'partners' },
    ]
  )

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

    <main className="grid min-h-screen bg-slate-900 place-items-center">
      <div className="container flex flex-col items-center justify-center w-full max-w-5xl gap-4 p-8 rounded-lg md:flex-row bg-slate-300">
        <DndContext sensors={sensors} autoScroll={false} collisionDetection={closestCenter} onDragEnd={drawEnd} >
          <div className="flex flex-row w-full md:max-w-[200px] gap-8 md:flex-col ">

            <div className="w-full  min-w-[100px] border-blue-400 aspect-square">
              <Droppable id="one" disabled={selectedCirculero.firstCirculero ? true : false} >
                {
                  selectedCirculero.firstCirculero ?
                    <div className="flex flex-col items-center justify-between h-full bg-blue-300">
                      <p className="py-4">{selectedCirculero.firstCirculero.name}</p>
                      <button onClick={() => removeCirculero('first')} className="w-full p-2 bg-red-500">Remove</button>
                    </div>
                    : <div className="flex flex-col items-center justify-center h-full ">
                      <p>Arrastre aquí</p>
                    </div>
                }

              </Droppable>
            </div>
            <div className="w-full  min-w-[100px] border-red-400 aspect-square">
              <Droppable id="two" disabled={selectedCirculero.secondCirculero ? true : false} >
                {
                  selectedCirculero.secondCirculero ?

                    <div className="flex flex-col items-center justify-between h-full bg-red-300">
                      <p className="py-4">{selectedCirculero.secondCirculero.name}</p>
                      <button onClick={() => removeCirculero('second')} className="w-full p-2 bg-red-500">Remove</button>
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
                    <Draggable disabled={item == selectedCirculero.firstCirculero || selectedCirculero.secondCirculero == item} id={item.id} key={item.id} circulero={item} />))
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
