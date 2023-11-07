
import StarsContainer from "../components/StarsContainer";
import useTransition from "../hooks/useTransition";
const Home = () => {

  const { handletransition } = useTransition()

  const handleRoute = (route: string) => {
    handletransition(route)
  }

  return (
    <div className="relative bg-[url('/images/backgrounds/montana/front.webp')] bg-fixed bg-bottom bg-contain bg-no-repeat z-10 flex flex-col items-center justify-center w-full min-h-screen gap-6  " style={{ viewTransitionName: 'view' }}>
      <img src="/images/circulo-logo.svg" alt="Logo Circulo" className="w-[50px] md:w-[70px]" />
      <StarsContainer quantity={5} clases="max-w-[30px] md:max-w-[45px]" />
      <h1 className="text-4xl italic font-bold md:text-5xl text-c-yellow">#EquipoEstrella</h1>
      <button onClick={() => handleRoute('/situation')} className="px-6 py-3 mt-6 text-lg font-bold text-black transition-transform rounded-full shadow-md shadow-slate-900 hover:scale-105 bg-c-yellow ">Empecemos</button>
    </div>
  );
}

export default Home;
