import StarsContainer from "../components/StarsContainer";

const Team = () => {
  return (
    <div className="relative bg-[url('/images/backgrounds/montana/front.webp')] bg-fixed bg-bottom bg-contain bg-no-repeat z-10 flex flex-col items-center justify-center w-full secure-min-h gap-6  " style={{ viewTransitionName: 'view' }}>
      <img src="/images/circulo-logo.svg" alt="Logo Circulo" className="w-[50px] md:w-[70px]" />
      <StarsContainer quantity={5} clases="max-w-[30px] md:max-w-[45px]" />
      <h1 className="text-4xl italic font-bold md:text-5xl text-c-yellow">#EquipoEstrella</h1>
    </div>
  );
}

export default Team;
