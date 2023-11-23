import { Circulero } from "../data/circuleros";

interface Props{
  circulero:Circulero,
  rol:string
}

const CirculeroCard = ({circulero ,rol}:Props) => {
  return (
    <div className="flex items-center w-full">
      <img src={`/images/circuleros/${circulero.image ? circulero.image : 'no-profile'}.webp`} className="w-[100px] h-[100px] rounded-full" alt="" />
      <div className="grid w-full gap-2 px-4">
        <h3 className="text-xl ">{rol}</h3>
        <p className="text-lg font-bold uppercase">{circulero.name}</p>
      </div>
    </div>
  );
}

export default CirculeroCard;
