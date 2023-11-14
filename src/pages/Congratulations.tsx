import confetti from "canvas-confetti";
import { ChangeEvent, useEffect } from "react";
import { useGameStore } from "../store/gameStore";
import useTransition from "../hooks/useTransition";
import { useNavigate } from "react-router-dom";
import { circuleros } from "../data/circuleros";




const Congratulations = () => {

  const { handletransition } = useTransition()
  const navigate = useNavigate()
  const canPass = useGameStore(state => state.canPass)
  const teamName = useGameStore(state => state.teamName)
  const userName = useGameStore(state => state.userName)
  const setTeamName = useGameStore(state => state.setTeamName)
  // const attemps = useGameStore(state => state.attemps)
  const setUserName = useGameStore(state => state.setUserName)
  const addPartner = useGameStore(state => state.addPartner)


  const handleData = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()
    if (evt.target.name === 'nombre') {
      setTeamName(evt.target.value)
    }
    if (evt.target.name === 'team') {
      setUserName(evt.target.value)
    }
  }




  useEffect(() => {
    const admins = circuleros!.filter(circulero => circulero.roles.includes('Administrativo/a'))
    addPartner(admins[1], 'Admin')
    
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function frame() {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: (Math.random() * skew) - 0.2
        },
        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
        shapes: ['star'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      });
      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }
    if (!canPass) {
      navigate('/tramposo')
    } else {
      setTimeout(() => {
        frame()
      }, 1500)
    }
  }, [canPass, navigate]);

  return (
    <section className=" relative z-10 flex flex-col px-4 gap-5 items-center justify-center w-full secure-min-h py-10 md:pt-4  bg-[url('/images/backgrounds/montana/front.webp')] bg-fixed bg-bottom bg-contain bg-no-repeat" style={{ viewTransitionName: 'view' }} >
      <div
        className="absolute top-0 left-0 z-50 grid w-full h-16 grid-cols-4 md:grid-cols-2 lg:h-28 ">
        <div className='relative bottom-0 left-0 w-1/4 h-0 col-span-4 border-b-8 border-dotted animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[1500ms] md:w-1/2 border-c-cyan' />

        <div className="w-full h-16 col-start-1 row-start-1 " />
        <div className="absolute flex gap-1 pl-2 md:translate-x-[120px] md:gap-2 left-1/2 bottom-0 translate-y-1/3 lg:-translate-y-2 2xl:translate-x-[150px]">
          {
            ["1a", "2a", "3a", "4a", "5a"].map((item) =>
              <img key={item} src="/images/icons/star-correct.svg" alt="full star" className="max-w-[30px] lg:max-w-[40px] xl:max-w-[50px] animate-jump animate-thrice animate-duration-500 animate-delay-500" />
            )}
        </div>
        <img src="/images/rocket.gif" alt="rocket" className="absolute z-50 w-full 2xl:max-w-[200px]  max-w-[150px] -translate-x-1/3  top-full lg:top-2/3 -translate-y-1/2 lg:-translate-y-1/3 left-1/4 md:left-1/2" />
      </div>
      <h2 className="mt-20 text-4xl font-bold lg:text-5xl text-c-yellow">¡FELICITACIONES!</h2>
      <p className="max-w-xs text-xl font-bold text-center text-white lg:text-2xl">¡Las tres campañas fueron un súper mega archi éxito en el mundo entero!</p>
      <div className="flex flex-col w-full max-w-xs gap-2">
        <label className="text-xs text-white lg:text-sm" htmlFor="nombre" >Completá tu nombre</label>
        <input type="text" onChange={handleData} name="nombre" className="px-4 py-2 border rounded-md border-c-yellow" placeholder="Nombre" id="nombre" />
      </div>
      <div className="flex flex-col w-full max-w-xs gap-2">
        <label className="text-xs text-white lg:text-sm" htmlFor="team">Completá el nombre del Team</label>
        <input type="text" onChange={handleData} name="team" className="px-4 py-2 border rounded-md border-c-yellow" placeholder="Team" id="team" />
      </div>

      <button disabled={!teamName || !userName} onClick={() => handletransition('/team')} className="px-8 py-2 mt-4 font-medium rounded-full shadow-md disabled:bg-gray-400 bg-c-yellow shadow-black">Listo</button>
      <div className="absolute bottom-0 left-0 animate-fade-right animate-twice animate-duration-[5000ms] animate-delay-[1500ms] animate-alternate">
        <p className="text-[10px] text-c-yellow xl:text-base text-end max-w-[150px] xl:max-w-[250px]">Están lloviendo estrellas 🎵</p>
        <img src="/images/castro.gif" alt="cristian castro" className="xl:max-w-[250px] max-w-[150px] " />
      </div>
    </section>
  );
}

export default Congratulations;
