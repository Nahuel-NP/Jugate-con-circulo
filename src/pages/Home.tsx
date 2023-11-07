
import StarsContainer from "../components/StarsContainer";
import useTransition from "../hooks/useTransition";
const Home = () => {

  const { handletransition } = useTransition()

  const handleRoute = (route: string) => {
    handletransition(route)
  }

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-center bg-cover saturate-150" style={{ viewTransitionName: 'view', background: 'linear-gradient(90deg, rgba(29, 183, 179, 0.50) 0%, rgba(45, 169, 182, 0.50) 19%, rgba(88, 132, 188, 0.50) 56%, rgba(145, 83, 197, 0.50) 100% )' }}>
        <img src="/images/circulo-logo.svg" alt="Logo Circulo" className="w-[70px] h-[70px]" />
        <StarsContainer quantity={5} starWidth="50px"/>
      <h1 className="text-5xl italic font-bold text-c-yellow">#EquipoEstrella</h1>
      <button onClick={() => handleRoute('/situation')} className="px-6 py-3 mt-6 text-lg font-bold text-black transition-transform rounded-full shadow-md shadow-slate-900 hover:scale-105 bg-c-yellow ">Empecemos</button>
    </div>
  );
}

export default Home;
