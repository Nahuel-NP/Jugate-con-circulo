
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
    zIndex: isDragging ? 100 : 70,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style}  {...listeners} {...attributes} className='flex max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px] z-50 items-center animate-fade animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards justify-center w-full overflow-hidden rounded-full  cursor-grab aspect-square'>
      {disabled
        ?
        <div className='flex items-center justify-center w-full h-full text-center border-2 lg:border-[6px] rounded-full cursor-not-allowed border-c-cyan'>
          <p className='text-[8px] leading-[12px] px-2 text-white select-none sm:text-[10px] xl:text-xs uppercase '>{circulero?.apodo}</p>
        </div>
        :
        <div className='w-full p-1 md:p-[6px] bg-white'>
          <img className='rounded-full' src={`/images/circuleros/${circulero?.image ? circulero.image : 'no-profile'}.webp`} alt={circulero?.name} />
        </div>}
    </div>
  );
}
