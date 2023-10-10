import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { useMediaQuery } from '../hooks/useMediaQuery';





const Situation = () => {
  const items = [
    { title: 'Branding', image: '/images/icons/B.png', description: 'Concepto y estrategia para una campaña ecológica.' },
    { title: 'Marketing', image: '/images/icons/M.png', description: 'Planificación de 3 campañas para posicionar el hashtag #ElegíFelicidad' },
    { title: 'Web', image: '/images/icons/W.png', description: 'Desarrollo de una landing promocional con premios, conectada a un administrador para validar a los participantes.' }]

 const isDesktop = useMediaQuery('(min-width: 768px)')
  return (

    <section className="flex items-center justify-center w-full h-full pt-24 md:pt-0" style={{ viewTransitionName: 'view', background: 'linear-gradient(90deg, rgba(145, 83, 197, 0.50) 0%, rgba(53, 19, 96, 0.50) 99.99%)' }} >
      <div className="container flex flex-col items-center justify-center gap-4 p-4 text-center ">
        <h2 className="text-xl tracking-wide uppercase text-c-yellow">
          BUENAS NOTICIAS:
        </h2>
        <h3 className="text-2xl font-bold text-c-yellow">¡Cerramos con Coca Cola!</h3>
        <p className="text-lg text-white"> <span className="font-bold">Vendimos 3 proyectos.</span>  Uno por cada unidad que tenemos.</p>

        {

          isDesktop ? (
            <div className="z-30 hidden gap-10 p-4 mx-auto mt-16 xl:gap-20 md:grid md:grid-cols-3">
              {
                items.map((item, index) => (
                  <div key={index} className="relative max-w-xs p-8 bg-white md:max-w-sm before:w-full before:h-full before:absolute before:bg-c-magenta before:-z-10 before:-left-4 before:top-4">
                    <img src={item.image} alt={item.title} className="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2" />
                    <h4 className="mt-4 font-bold uppercase lg:text-2xl">{item.title}</h4>
                    <p className="mt-2 text-sm font-semibold lg:text-base">{item.description}</p>
                  </div>))
              }
            </div>
          )
            :

            <Swiper
              className='relative w-full mx-auto mt-4 '
              spaceBetween={50}
              scrollbar={{ enabled: false }}
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                items.map((item, index) => (
                  <SwiperSlide key={index} className='pt-10 pb-14'>
                    <div className="relative min-h-[190px] max-w-xs p-8 mx-auto bg-white md:max-w-sm before:w-full before:h-full before:absolute before:bg-c-magenta before:-z-10 before:-left-4 before:top-4">
                      <img src={item.image} alt={item.title} className="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2" />
                      <h4 className="mt-4 font-bold uppercase md:text-2xl">{item.title}</h4>
                      <p className="mt-2 text-sm font-semibold md:text-base">{item.description}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

        }

      </div>
    </section>

  );
}

export default Situation;
