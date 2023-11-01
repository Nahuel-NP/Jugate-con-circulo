import {  Question } from "../data/circuleros";
import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";

export interface Result {
  hasError: boolean;
  first: Error | null;
  second: Error | null;
}

interface Error {
  title: string;
  content: string;
}



export const useVerifyAnswer = (
/*   firstCirculero: Circulero,
  secondCirculero: Circulero, */
  question: Question
) => {


  /* const [result, setResult] = useState<Result>({
    hasError: false,
    first: null,
    second: null
  }); */

  const setHasError = useGameStore(state => state.setHasError)
  const hasError = useGameStore(state => state.hasError)
  const setFirstError = useGameStore(state => state.setFirstError)
  const firstError = useGameStore(state => state.firstError)
  const setSecondError = useGameStore(state => state.setSecondError)
  const secondError = useGameStore(state => state.secondError)
  const firstSelectedCirculero = useGameStore(state => state.firstSelectedCirculero)
  const secondSelectedCirculero = useGameStore(state => state.secondSelectedCirculero)

  const resetErrors = () => {
    setHasError(false)
    setFirstError(null)
    setSecondError(null)
  }

  // useEffect(() => {

  //   if (
  //     firstCirculero &&
  //     !firstCirculero?.roles.some((rol) =>
  //       question?.roles[0].correcto.includes(rol)
  //     )
  //   ) {
  //     setHasError(true)
  //     setFirstError({
  //       title: `Fallaste seleccionando al <span class="px-4 py-2 ml-2 text-white uppercase shadow-md bg-c-magenta shadow-black ">${question.roles[0].buscado}</span>`,
  //       content: `${firstCirculero.apodo} es ${firstCirculero.roles.join(' y ')}`
  //     })

  //   } else {
  //     if (!secondError) {
  //       setHasError(false)
  //     }
  //     setFirstError(null)
  //   }
  // }, [firstCirculero, question]);

  // useEffect(() => {
  //   if (
  //     secondCirculero &&
  //     !secondCirculero?.roles.some((rol) =>
  //       question?.roles[1].correcto.includes(rol)
  //     )
  //   ) {
  //     setHasError(true)
  //     setSecondError({
  //       title: `Fallaste seleccionando al <span class="px-4 py-2 text-black uppercase shadow-md bg-c-cyan shadow-black">${question.roles[1].buscado}</span>`,
  //       content: `${secondCirculero.apodo} es ${secondCirculero.roles.join(' y ')}`
  //     })
  //   } else {
  //     setSecondError(null)
  //     if (!firstError) {
  //       setHasError(false)
  //     }
  //   }
  // }, [secondCirculero, question]);
  
  useEffect(() => {

    if (
      firstSelectedCirculero &&
      !firstSelectedCirculero?.roles.some((rol) =>
        question?.roles[0].correcto.includes(rol)
      )
    ) {
      setHasError(true)
      setFirstError({
        title: `Fallaste seleccionando al <span class="px-4 py-2 ml-2 text-white uppercase shadow-md bg-c-magenta shadow-black ">${question.roles[0].buscado}</span>`,
        content: `${firstSelectedCirculero.apodo} es ${firstSelectedCirculero.roles.join(' y ')}`
      })

    } else {
      if (!secondError) {
        setHasError(false)
      }
      setFirstError(null)
    }
  }, [firstSelectedCirculero, question]);

  useEffect(() => {
    if (
      secondSelectedCirculero &&
      !secondSelectedCirculero?.roles.some((rol) =>
        question?.roles[1].correcto.includes(rol)
      )
    ) {
      setHasError(true)
      setSecondError({
        title: `Fallaste seleccionando al <span class="px-4 py-2 text-black uppercase shadow-md bg-c-cyan shadow-black">${question.roles[1].buscado}</span>`,
        content: `${secondSelectedCirculero.apodo} es ${secondSelectedCirculero.roles.join(' y ')}`
      })
    } else {
      setSecondError(null)
      if (!firstError) {
        setHasError(false)
      }
    }
  }, [secondSelectedCirculero, question]);

  return {hasError,resetErrors};
};
