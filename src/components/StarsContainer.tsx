import { useState} from 'react';

interface Props {
  quantity?: number
}
const StarsContainer = ({ quantity = 0 }: Props) => {

  const [stars] = useState(new Array(quantity).fill('star'));
  console.log('tamano ',stars.length);
  return (
    <div className='flex justify-center w-full gap-2'>
      {
        stars.map((_, index) => (
          <img src="/images/icons/star-correct.svg"  alt="star" key={index} />
        ))
      }
    </div>
  );
}

export default StarsContainer;
