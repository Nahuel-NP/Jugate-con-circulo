import { Circulero } from "../data/circuleros";

interface Props{
  circulero:Circulero,
  rol:string
}

const CirculeroCard = ({circulero ,rol}:Props) => {
  return (
    <div className="flex w-full">
      <img src={`/images/circuleros/${circulero.image ? circulero.image : 'no-profile'}.jpg`} className="w-[100px] h-[100px] rounded-full" alt="" />
      <div className="w-full">
        <h3>{rol}</h3>
        <p>{circulero.name}</p>
      </div>
    </div>
  );
}

export default CirculeroCard;
