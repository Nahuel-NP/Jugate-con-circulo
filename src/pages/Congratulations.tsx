import confetti from "canvas-confetti";
import { useEffect } from "react";

const Congratulations = () => {


  useEffect(() => {


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
    setTimeout(() => {
      frame()
    }, 1500)
  }, []);

  return (
    <section className="relative z-10 flex items-center justify-center w-full min-h-screen py-10 md:pt-4  bg-[url('/images/backgrounds/montana/front.webp')] bg-fixed bg-bottom bg-contain bg-no-repeat" style={{ viewTransitionName: 'view', background: '' }} >
      <h2>Congratulations</h2>
      <div className="absolute bottom-0 left-0 animate-fade-right animate-twice animate-duration-[5000ms] animate-delay-[1500ms] animate-alternate">
        <p className="text-xs text-c-yellow xl:text-base text-end">Están lloviendo estrellas</p>
        <img src="/images/castro.gif" alt="cristian castro" className="xl:max-w-[250px] max-w-[150px] " />
      </div>
    </section>
  );
}

export default Congratulations;
