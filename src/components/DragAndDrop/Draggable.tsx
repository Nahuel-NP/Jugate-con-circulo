
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Circulero } from '../../App';

interface Props {
  id: string;
  circulero?: Circulero;
  disabled?: boolean
}

export const Draggable = ({ id, circulero, disabled = false }: Props) => {


  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    data: {
      type: 'circulero',
      circulero
    },
    disabled
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    opacity: isDragging ? 1 : 0.6,

    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style}  {...listeners} {...attributes} className='flex items-center justify-center w-full bg-purple-400 rounded-full cursor-grab aspect-square'>
      {disabled ? (<div className='w-full text-center cursor-not-allowed'>
        <p className='text-xs bg-red-500 select-none md:text-base'>{circulero?.name}</p>
      </div>) :
        <div className='w-full text-center '>
          <p className='text-xs select-none md:text-base'>{circulero?.name}</p>
        </div>}
    </div>
  );
}
