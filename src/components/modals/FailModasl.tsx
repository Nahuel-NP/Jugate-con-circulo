import { useGameStore } from "../../store/gameStore";
import { useModalStore } from "../../store/modalStore";

const FailModasl = () => {

  const setErrorModal = useModalStore((state) => state.setErrorModal)
  const firstError = useGameStore((state) => state.firstError)
  const secondError = useGameStore((state) => state.secondError)
  const setFirstError = useGameStore((state) => state.setFirstError)
  const setSecondError = useGameStore((state) => state.setSecondError)

  const reset = () => {
    setErrorModal(false)
    setFirstError(null)
    setSecondError(null)
  }

  return (
    <>
      <img src="/images/ups.svg" alt="fallaste" />
      <h2 className="text-2xl font-bold text-red-600 uppercase xl:text-4xl drop-shadow-lg shadow-black">perdimos al cliente</h2>
      {
        firstError &&
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-white" dangerouslySetInnerHTML={{ __html: firstError.title }} />
          <p className="font-semibold text-center text-c-yellow">{firstError.content}</p>
        </div>
      }
      {
        secondError &&
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-white" dangerouslySetInnerHTML={{ __html: secondError.title }} />
          <p className="font-semibold text-center text-c-yellow">{secondError.content}</p>
        </div>
      }
      <button onClick={reset} className="px-6 py-2 font-semibold rounded-full bg-c-yellow">Vamo de vuelta</button>
    </>
  );
}

export default FailModasl;
