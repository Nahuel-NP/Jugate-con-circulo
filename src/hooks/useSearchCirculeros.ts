import { Circulero, circuleros, Question } from '../data/circuleros';

export const useSearchCirculeros = (pregunta: Question, cantidad: number = 4) => {

  const respuestas_correctas: Circulero[] = [];
  const {roles} = pregunta;

  roles.forEach((rolPregunta) => {

    const correctos: Circulero[] = circuleros.filter((item) => {
      if (!respuestas_correctas.includes(item)) {
        return item.roles.some((rol)=>rolPregunta.correcto.includes(rol))
      }
    })

    respuestas_correctas.push(...correctos.slice(0, cantidad));
  });
  return { correctas: respuestas_correctas }

}