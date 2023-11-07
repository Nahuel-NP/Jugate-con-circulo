import { useState} from 'react';

interface Props {
  quantity?: number
  starWidth?: string
}
const StarsContainer = ({ quantity = 0,starWidth='auto' }: Props) => {

  const [stars] = useState(new Array(quantity).fill('star'));

  return (
    <div className='flex justify-center gap-2'>
      {
        stars.map((_, index) => (
          <img src="/images/icons/star-correct.svg" className={`max-w-[${starWidth}]`}    alt="star" key={index} />
        ))
      }
    </div>
  );
}

export default StarsContainer;
