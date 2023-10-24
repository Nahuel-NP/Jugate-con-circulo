import { preguntas } from '../data/circuleros';



export const useQuestion = (stage:number) => {
  const pregunta =  preguntas.filter((pregunta) => pregunta.id === stage)[0]
    return pregunta
}