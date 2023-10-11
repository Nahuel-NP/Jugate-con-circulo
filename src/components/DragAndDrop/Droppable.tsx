import { useDroppable } from '@dnd-kit/core';

interface Props {
  id: string;
  children?: React.ReactNode;
  disabled?: boolean;
}
export function Droppable(props: Props) {
  const { isOver, setNodeRef, } = useDroppable({
    id: props.id,
    disabled: props.disabled
  });


  return (
    <div ref={setNodeRef} className='relative flex items-center justify-center w-full h-full '>
      {props.children}
      {isOver && <div className='absolute top-0 left-0 w-full h-full opacity-50 bg-c-purple'></div>}
    </div>
  );
}