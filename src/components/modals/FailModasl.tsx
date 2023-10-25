import { useModalStore } from "../../store/modalStore";

const FailModasl = () => {

  const setErrorModal = useModalStore((state)=>state.setErrorModal)
  return (
    <>
      <img src="/images/ups.svg" alt="fallaste" />
      <h2 className="text-2xl font-bold text-red-600 uppercase xl:text-4xl drop-shadow-lg shadow-black">perdimos al cliente</h2>
      <button onClick={()=>setErrorModal(false)} className="px-6 py-2 font-semibold rounded-full bg-c-yellow">Vamo de vuelta</button>
    </>
  );
}

export default FailModasl;
