import { Circulero, Question } from "../data/circuleros";
import { CirculerosState } from "../pages/Game";
import { useEffect, useState } from "react";

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
  firstCirculero:Circulero,
  secondCirculero: Circulero,
  question: Question
) => {

  
  const [result, setResult] = useState<Result>({
    hasError: false,
    first: null,
    second: null
  });


  const resetSelected = () => {
    setResult({ hasError: false, first: null, second: null })
  }

  useEffect(() => {

    if (
      firstCirculero &&
      !firstCirculero?.roles.some((rol) =>
        question?.roles[0].correcto.includes(rol)
      )
    ) {
      console.log(firstCirculero);
      setResult({
        hasError: true,
        first: {
          title: `Fallaste seleccionando al ${question.roles[0].buscado}`,
          content: `${firstCirculero.name} es ${firstCirculero.roles.join(' y ')}`
        },
        second: result.second
      })
    } else {
      setResult({
        hasError: !!result.second,
        first: null,
        second: result.second
      })
    }

  }, [firstCirculero,question]);

  useEffect(() => {
    console.log(secondCirculero);
    if (
      secondCirculero &&
      !secondCirculero?.roles.some((rol) =>
        question?.roles[1].correcto.includes(rol)
      )
    ) {
      setResult({
        hasError: true,
        second: {
          title: `Fallaste seleccionando al ${question.roles[1].buscado}`,
          content: `${secondCirculero.name} es ${secondCirculero.roles.join(' y ')}`
        },
        first: result.first
      })
    } else {
      setResult({
        hasError: !!result.first,
        first: result.first,
        second: null
      })
    }
  }, [secondCirculero,question]);

  return { result, resetSelected };
};
