
import { circuleros } from "../data/circuleros";
import { useOthersCirculeros } from "./useOthersCirculeros";
import { useQuestion } from "./useQuestion";
import { useSearchCirculeros } from "./useSearchCirculeros";



export const useRandomCirculeros = (stage: number) => {

  circuleros.sort(function () {
    return Math.random() - 0.5;
  });
  
  const pregunta = useQuestion(stage)

  const { correctas } = useSearchCirculeros(pregunta)

  const others = useOthersCirculeros(correctas)

  const circulerosToShow = [...others,...correctas]
  
  circulerosToShow.sort(function () {
    return Math.random() - 0.5;
  });

  
  return {
    circuleros:circulerosToShow,
    pregunta
  }

}