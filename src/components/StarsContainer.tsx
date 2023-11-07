import { useState} from 'react';

interface Props {
  quantity?: number
  clases?: string
}
const StarsContainer = ({ quantity = 0,clases='' }: Props) => {

  const [stars] = useState(new Array(quantity).fill('star'));

  return (
    <div className='flex justify-center gap-2'>
      {
        stars.map((_, index) => (
          <img src="/images/icons/star-correct.svg" className={`${clases}`}    alt="star" key={index} />
        ))
      }
    </div>
  );
}

export default StarsContainer;
