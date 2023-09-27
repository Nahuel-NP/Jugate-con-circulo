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
  const style = {
    /* opacity: isOver ? 1 : 0.5, */
    border: isOver ? '2px solid red' : '2px solid #ccc',
  };

  return (
    <div ref={setNodeRef} style={style} className='w-full h-full'>
      {props.children}
    </div>
  );
}