import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-center bg-cover bg-montana font-rubik">
      <div style={{ viewTransitionName: 'rocket' }}  className="absolute top-0 left-0 z-50 grid w-full h-20 grid-cols-2 before:border-b-8 before:border-c-cyan before:border-dotted before:relative before:col-start-2">
        <img src="/images/rocket.png" alt="rocket"  className="absolute z-50 -translate-x-1/2 rocket-animation top-1/2 left-1/2"/>
      </div>
        <Outlet />
      <img style={{ viewTransitionName: 'mountains' }} src="/images/backgrounds/montana/front.png" className="fixed bottom-0 z-50 w-full" loading="lazy" decoding="async" alt="mountains" />
    </main>
  );
}

export default MainLayout;
//posiciones background
// 10 %
// 35 %
// 52 % //56
//100