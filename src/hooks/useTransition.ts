/* eslint-disable @typescript-eslint/ban-ts-comment */
import { flushSync } from 'react-dom';
import { useNavigate } from "react-router-dom";


const useTransition = () => {

  const navigate = useNavigate()

  const handletransition = (route: string) => {

    //@ts-ignore
    if (!document.startViewTransition) {
      navigate(route)
      return;
    }
    console.log({route});
    //@ts-ignore
    document.startViewTransition(() => {
      //cambios de forma sincrona en el DOM
      flushSync(() => navigate(route))
    })


  }
  return {
    handletransition
  }
}

export default useTransition;