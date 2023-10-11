
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Circulero } from '../../data/circuleros';


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
    opacity: isDragging ? 1 : 0.9,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style}  {...listeners} {...attributes} className='flex max-w-[100px] z-50 items-center justify-center w-full overflow-hidden rounded-full  cursor-grab aspect-square'>
      {disabled
        ?
        <div className='w-full text-center cursor-not-allowed'>
          <p className='text-xs bg-red-500 select-none md:text-base'>{circulero?.name}</p>
        </div>
        :
        <div className='w-full p-1 md:p-2 bg-gradient-to-r from-c-cyan to-c-purple'>
          <img className='rounded-full' src={`/images/circuleros/${circulero?.image ? circulero.image : 'no-profile'}.jpg`} alt={circulero?.name} />
        </div>}
    </div>
  );
}
