import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="relative bg-fixed bg-center bg-cover bg-montana font-rubik">
      <div style={{ viewTransitionName: 'rocket' }} className="absolute top-0 left-0 z-50 grid w-full h-16 grid-cols-2 lg:h-20 before:border-b-8 before:border-c-cyan before:border-dotted before:relative before:col-start-2">
        <img src="/images/rocket.gif" alt="rocket" className="absolute z-50 w-full lg:max-w-[200px] max-w-[150px] -translate-x-1/2  top-full -translate-y-1/2 left-1/2" />
      </div>
      <Outlet />
      <img style={{ viewTransitionName: 'mountains',zIndex:10}} src="/images/backgrounds/montana/front.webp" className="fixed bottom-0 w-full " loading="lazy" decoding="async" alt="mountains" />
      {/* <div className="absolute top-0 left-0 backdrop-blur-sm !z-50 w-full h-full bg-opacity-70 bg-c-purple flex flex-col justify-center items-center gap-10">
        <p className="w-[324px] h-[99px] text-center text-white text-base font-bold font-['Rubik'] leading-[31px]">Para elegir un Circulerx seleccioná y arrastrá hasta la tarjeta con la descripción</p>
        <img src="/images/icons/swipe-icon.svg" alt="swap icon" className="animate-wiggle-more animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-in-out animate-normal animate-fill-both" />
        <button className="w-[153px] h-[47px] bg-yellow-400 rounded-[50px] hover:scale-105 transition-transform shadow">Entendido</button>
      </div> */}
    </main>
  );
}

export default MainLayout;