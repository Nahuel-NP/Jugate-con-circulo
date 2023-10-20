
interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({children}:ModalProps) => {
  return (
    <div className="absolute animate-fade-down animate-once animate-ease-in-out top-0 left-0 backdrop-blur-sm !z-50 w-full h-full bg-opacity-70 bg-c-purple flex flex-col justify-center items-center gap-10">
      {children}
    </div>
  );
}

export default Modal;
