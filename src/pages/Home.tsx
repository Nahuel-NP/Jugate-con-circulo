/* eslint-disable @typescript-eslint/ban-ts-comment */

import useTransition from "../hooks/useTransition";


const Home = () => {

  const { handletransition } = useTransition()

  const handleRoute = (route: string) => {
    handletransition(route)
  }

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-10 bg-center bg-cover " style={{ viewTransitionName: 'view', background: 'linear-gradient(90deg, rgba(29, 183, 179, 0.50) 0%, rgba(45, 169, 182, 0.50) 19%, rgba(88, 132, 188, 0.50) 56%, rgba(145, 83, 197, 0.50) 100% )' }}>
        <img src="/images/title.svg" alt="Jugate Con Circulo" className="w-full max-w-xs md:max-w-xl" />
      <button onClick={() => handleRoute('/situation')} className="px-4 py-2 text-lg font-bold text-black uppercase transition-transform rounded-md hover:scale-105 bg-c-yellow">Iniciar</button>
    </div>
  );
}

export default Home;
