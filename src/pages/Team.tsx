import StarsContainer from "../components/StarsContainer";
import { useGameStore } from "../store/gameStore";

const Team = () => {

  const userName = useGameStore(state => state.userName)
  const teamName = useGameStore(state => state.teamName)
  const team = useGameStore(state => state.team)
  console.log(team);
  return (
    <div className="relative bg-[url('/images/backgrounds/montana/front.webp')] px-4 bg-fixed bg-bottom bg-contain bg-no-repeat z-10 flex flex-col py-5 items-center justify-center w-full secure-min-h gap-6  " style={{ viewTransitionName: 'view' }}>
      <p className="text-3xl font-bold text-center text-c-yellow">{userName} creaste este <span className="italic">#EquipoEstrella</span> </p>
      <StarsContainer quantity={5} clases="max-w-[30px] md:max-w-[45px]" />
      <p className="text-3xl font-bold text-center text-c-yellow">{teamName}</p>

      <div className="relative grid  grid-cols-6 gap-4 after:border-2 after:border-c-yellow after:absolute  after:border-t-0 after:-bottom-4 after:left-0 after:w-full after:h-[140px]">

        {
          team.map(partner => (

            <div key={partner.rol} className='[&:nth-child(10)]:col-span-3 [&:nth-child(11)]:col-span-3  w-full col-span-2 gap-2  p-1 md:p-[6px] flex flex-col justify-center items-center'>
              <img className='p-2 rounded-full bg-gradient-to-r from-[#1DB7B3] to-[#9153C5] max-w-[100px]  ' src={`/images/circuleros/${partner.circulero.image ? partner.circulero.image : 'no-profile'}.jpg`} alt={partner.circulero.name} />
              <p className="text-xs text-center text-white uppercase">{partner.rol}</p>
            </div>
          ))
        }
      </div>
      <img src="/images/telefono.png" alt="telefono" />
    </div>
  );
}

export default Team;
