
const Situation = () => {
  const items = [
    { title: 'Branding', image: '/images/icons/B.png', description: 'Concepto y estrategia para una campaña ecológica.' },
    { title: 'Marketing', image: '/images/icons/M.png', description: 'Planificación de 3 campañas para posicionar el hashtag #ElegíFelicidad' },
    { title: 'Web', image: '/images/icons/W.png', description: 'Desarrollo de una landing promocional con premios, conectada a un administrador para validar a los participantes.' }]
  return (

    <section className="grid min-h-screen place-items-center" style={{ viewTransitionName: 'view', background: 'linear-gradient(90deg, rgba(145, 83, 197, 0.50) 0%, rgba(53, 19, 96, 0.50) 99.99%)' }} >
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-xl tracking-wide uppercase text-c-yellow">
          BUENAS NOTICIAS:
        </h2>
        <h3 className="text-2xl font-bold text-c-yellow">¡Cerramos con Coca Cola!</h3>
        <p className="text-lg text-white"> <span className="font-bold">Vendimos 3 proyectos.</span>  Uno por cada unidad que tenemos.</p>
        <div className="grid grid-cols-3 gap-10 mt-16">
          {
            items.map((item, index) => (
              <div key={index} className="relative max-w-sm p-8 bg-white before:w-full before:h-full before:absolute before:bg-c-magenta before:-z-10 before:-left-4 before:top-4">
                <img src={item.image} alt={item.title} className="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2" />
                <h4 className="mt-4 text-2xl font-bold uppercase">{item.title}</h4>
                <p className="mt-2 font-semibold">{item.description}</p>
              </div>))
          }
        </div>
      </div>
    </section>

  );
}

export default Situation;
