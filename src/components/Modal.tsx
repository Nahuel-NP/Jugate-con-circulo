
interface ModalProps {
  children: React.ReactNode;
  bgClass?:string;
}

const Modal = ({children,bgClass = 'bg-c-purple'}:ModalProps) => {
  return (
    <div className={`absolute animate-fade-down animate-once animate-ease-in-out top-0 left-0 backdrop-blur-sm !z-[200] w-full h-full bg-opacity-70  flex flex-col justify-center items-center gap-10 ${bgClass}`}>
      {children}
    </div>
  );
}

export default Modal;
