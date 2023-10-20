

const TutorialModal = () => {
  return (
    <>
      <p className="w-[324px] h-[99px] text-center text-white text-base font-bold font-['Rubik'] leading-[31px]">Para elegir un Circulerx seleccioná y arrastrá hasta la tarjeta con la descripción</p>
      <img src="/images/icons/swipe-icon.svg" alt="swap icon" className="lg:block hidden animate-wiggle-more animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-in-out animate-normal animate-fill-both" />
      <img src="/images/icons/swipe-icon-rotated.svg" alt="swap icon" className=" lg:hidden animate-wiggle-more animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-in-out animate-normal animate-fill-both" />
      <button
        className="w-[153px] h-[47px] bg-yellow-400 rounded-[50px] hover:scale-105 transition-transform shadow">Entendido</button>
    </>
  );
}

export default TutorialModal;
