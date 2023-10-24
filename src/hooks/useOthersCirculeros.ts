import { Circulero, circuleros } from "../data/circuleros";


export const useOthersCirculeros = (correctos:Array<Circulero>)=>{
const cantidad = 20 - correctos.length
  const others = circuleros.filter((item) => {
    return !correctos.includes(item);
  })
  return others.slice(0, cantidad);
}