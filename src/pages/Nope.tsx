import useTransition from "../hooks/useTransition";
// import html2canvas from "html2canvas";



const Nope = () => {
  const { handletransition } = useTransition()

  const handleRoute = (route: string) => {
    handletransition(route)
  }

/*   const exportAsImage = async () => {
    const element =document.querySelector<HTMLElement>('#capture')
    const canvas = await html2canvas(element!,{logging:true});
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, 'EquipoEstrella');
    }
    
    ;const downloadImage = (blob, fileName:string) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
    fakeLink.href = blob;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    fakeLink.remove();
    }; */


  return (
    <div  className=" relative bg-[url('/images/backgrounds/montana/front.webp')] bg-fixed bg-bottom bg-contain bg-no-repeat z-10 flex flex-col items-center justify-center w-full secure-min-h gap-6  " style={{ viewTransitionName: 'view' }}>
      <img src="/images/tramposo.gif" alt="Logo Circulo" className="w-full max-w-md" />
      <button onClick={() => handleRoute('/situation')} className="px-6 py-3 mt-6 text-lg font-bold text-black transition-transform rounded-full shadow-md shadow-slate-900 hover:scale-105 bg-c-yellow ">Sin trampa</button>
    </div>
  );
}

export default Nope;
