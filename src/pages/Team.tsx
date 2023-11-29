
import html2canvas from "html2canvas";
import StarsContainer from "../components/StarsContainer";
import { useGameStore } from "../store/gameStore";
import { useEffect, useState } from 'react';
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { frases } from "../data/circuleros";



const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}
const randomImage = getRandomInt(42) 
const randomFrase = getRandomInt(25) 

const Team = () => {

  const userName = useGameStore(state => state.userName)
  const setUserName = useGameStore(state => state.setUserName)
  const teamName = useGameStore(state => state.teamName)
  const setTeamName = useGameStore(state => state.setTeamName)
  const team = useGameStore(state => state.team)
  const setTeam = useGameStore(state => state.setTeam)
  const attemps = useGameStore(state => state.attemps)
  const setAttemps = useGameStore(state => state.setAttemps)
  const navigate = useNavigate()

  const [imageIndex,setImageIndex] = useState(randomImage)
  const [fraseIndex,setFraseIndex] = useState(randomFrase)

  const [storedValue,setValue] = useLocalStorage('gameResults', {
    userName,
    teamName,
    team,
    attemps,
    randomFrase,
    randomImage
  })

  useEffect(() => {
    if (team.length && teamName!= '' && userName !='') {
 
      setValue({
        userName,
        teamName,
        team,
        attemps,
        randomFrase,
        randomImage
      })
    }else{
      if (storedValue.userName && storedValue.teamName ) {

        setTeam(storedValue.team)
        setTeamName(storedValue.teamName)
        setUserName(storedValue.userName)
        setAttemps(storedValue.attemps)
        setFraseIndex(storedValue.randomFrase)
        setImageIndex(storedValue.randomImage)
      }
    }
    

    if (!team.length && !storedValue.teamName.length) {
      navigate('/tramposo')
    }

  }, []);

  const exportAsImage = () => {
    const btnToHide = document.querySelector<HTMLElement>('#toHideBtn')
    btnToHide!.style.visibility = 'hidden'
    const element = document.querySelector<HTMLElement>('#capture')
    html2canvas(element!).then(function (canvas) {
      const image = canvas.toDataURL("image/png", 1.0);
      downloadImage(image, 'EquipoEstrella');
    })
    btnToHide!.style.visibility = 'visible'
  }

  const downloadImage = (blob: string, fileName: string) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style.display = "none";
    fakeLink.download = fileName;
    fakeLink.href = blob;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    fakeLink.remove();
  };



  return (
    <div className="relative bg-[url('/images/backgrounds/montana/front.webp')] px-4 md:px-8 bg-fixed bg-bottom bg-contain bg-no-repeat z-10   " style={{ viewTransitionName: 'view' }}>
      <div className="container grid w-full gap-6 lg:gap-2 py-5 mx-auto xl:max-w-7xl 2xl:max-w-[1366px] place-items-center md:grid-cols-2 lg:grid-cols-4 secure-min-h">

        <div className="flex flex-col self-end gap-2 md:col-span-2 lg:col-span-4">
          <p className="text-3xl font-bold text-center text-c-yellow">{userName} creaste este <span className="italic">#EquipoEstrella</span> </p>
          <StarsContainer quantity={5} clases="max-w-[30px] md:max-w-[45px]" />
          <p className="text-3xl font-bold text-center text-c-yellow">{teamName}</p>
        </div>

        <div className="lg:col-span-3 md:col-span-1 2xl:pb-6 2xl:self-center">
          <div className={`relative  grid grid-cols-6 gap-4  lg:col-span-3 md:border-4   border-c-yellow border-b-4 pb-4 max-w-sm mx-auto  md:border-t-0 xl:border-b-4 xl:border-x-0 md:p-4 md:border-c-yellow lg:grid-cols-4 xl:grid-cols-6  lg:max-w-none md:gap-2 }`}>
            {
              team.map(partner => (

                <div key={partner.rol}
                  className={` lg:col-span-1   w-full col-span-2 gap-2  p-1 md:p-[6px] flex flex-col justify-center items-center `}>
                  <img className='p-2 rounded-full bg-gradient-to-r from-[#1DB7B3] to-[#9153C5] max-w-[85px] md:max-w-[90px] 2xl:max-w-[120px] ' src={`/images/circuleros/${partner.circulero.image ? partner.circulero.image : 'no-profile'}.webp`} alt={partner.circulero.name} />
                  <p className="text-xs text-center text-white uppercase">{partner.rol}</p>
                </div>
              ))
            }
          </div>
          <p className="max-w-sm py-4 text-lg italic font-medium text-white lg:max-w-none">{frases[fraseIndex]}</p>
        </div>
        <div className=" 2xl:justify-self-start 2xl:self-center">
          <img src="/images/telefono.webp" alt="telefono" style={{ backgroundImage: `url(/images/cocacola/coca-cola_${imageIndex}.webp)` }} className="max-w-[220px] md:max-w-[300px] lg:max-w-[230px] 2xl:max-w-[270px]  bg-[length:80%] bg-[center_top_40%] bg-no-repeat " />
          <p className="font-medium text-center text-white">Resuelto en {attemps} {attemps > 1 ? 'intentos' : 'intento'}</p>
        </div>

        <button onClick={exportAsImage} id="toHideBtn" className="self-start px-5 py-2 font-bold rounded-full md:col-span-2 bg-c-yellow lg:col-span-4">Compartir</button>
      </div>
    </div>
  );
}

export default Team;
