
import StarsContainer from "../components/StarsContainer";
import { useGameStore } from "../store/gameStore";


const AFTER_CLASSES = 'after:border lg:after:h-[70px] lg:after:bottom-0 lg:after:border-r md:after:border-0 after:border-c-yellow after:absolute  after:border-t-0 after:-bottom-4 after:left-0 after:w-full after:h-[140px]'
const NTH_CLASSES = '[&:nth-child(10)]:col-span-3 [&:nth-child(11)]:col-span-3 lg:[&:nth-child(11)]:absolute lg:[&:nth-child(11)]:w-auto  lg:[&:nth-child(11)]:right-0 lg:[&:nth-child(11)]:top-1/2 lg:[&:nth-child(11)]:translate-x-1/2 lg:[&:nth-child(11)]:-translate-y-1/2 lg:[&:nth-child(10)]:col-span-1'

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}
const randomImage = getRandomInt(42)+1

const Team = () => {

  const userName = useGameStore(state => state.userName)
  const teamName = useGameStore(state => state.teamName)
  const team = useGameStore(state => state.team)
  const attemps = useGameStore(state => state.attemps)


  return (
    <div className="relative bg-[url('/images/backgrounds/montana/front.webp')] px-4 bg-fixed bg-bottom bg-contain bg-no-repeat z-10   " style={{ viewTransitionName: 'view' }}>
      <div className="container grid w-full gap-6 py-5 mx-auto max-w-7xl place-items-center md:grid-cols-2 lg:grid-cols-4 secure-min-h">

        <div className="flex flex-col gap-2 md:col-span-2 lg:hidden">
          <p className="text-3xl font-bold text-center text-c-yellow">{userName} creaste este <span className="italic">#EquipoEstrella</span> </p>
          <StarsContainer quantity={5} clases="max-w-[30px] md:max-w-[45px]" />
          <p className="text-3xl font-bold text-center text-c-yellow">{teamName}</p>
        </div>

        <div className="lg:col-span-3 md:col-span-1">

          <div className="relative flex-col hidden gap-2 p-6 lg:items-start lg:flex md:col-span-6 lg:col-span-5 lg:before:absolute lg:before:right-0 lg:before:border-r lg:before:bottom-0 lg:after:absolute lg:after:bottom-1/2 lg:after:w-16 lg:after:border-b lg:after:border-c-yellow lg:after:right-0 lg:before:h-1/2 lg:before:border-c-yellow">
            <p className="text-3xl font-bold text-center text-c-yellow">{userName} creaste este <span className="italic">#EquipoEstrella</span> </p>

            <div className="flex items-center justify-center gap-4 ">
              <StarsContainer quantity={5} clases="max-w-[30px] md:max-w-[45px]" />
              <p className="text-3xl font-bold text-center text-c-yellow">{teamName}</p>
            </div>
          </div>
          <div className={`relative lg:before:absolute lg:before:right-0 lg:before:border-r lg:before:h-16 lg:before:border-c-yellow grid grid-cols-6 gap-4 lg:col-span-3 md:border lg:pr-16 lg:border-r-0 md:border-t-0 md:p-4 md:border-c-yellow lg:grid-cols-5 md:max-w-xs lg:max-w-none md:gap-2 ${AFTER_CLASSES}`}>
            {
              team.map(partner => (

                <div key={partner.rol}
                  className={` lg:col-span-1   w-full col-span-2 gap-2  p-1 md:p-[6px] flex flex-col justify-center items-center ${NTH_CLASSES}`}>
                  <img className='p-2 rounded-full bg-gradient-to-r from-[#1DB7B3] to-[#9153C5] max-w-[100px] md:max-w-[80px]  ' src={`/images/circuleros/${partner.circulero.image ? partner.circulero.image : 'no-profile'}.jpg`} alt={partner.circulero.name} />
                  <p className="text-xs text-center text-white uppercase">{partner.rol}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="2xl:justify-self-start">

          <img src="/images/telefono.webp" alt="telefono" style={{backgroundImage:`url(/images/cocacola/coca-cola_${randomImage}.webp)`}} className="max-w-[250px]  bg-[length:80%] bg-[center_top_40%] bg-no-repeat " />
          <p className="font-medium text-center text-white">Resuelto en {attemps} {attemps > 1 ? 'intentos' : 'intento'}</p>
        </div>

      </div>
    </div>
  );
}

export default Team;
