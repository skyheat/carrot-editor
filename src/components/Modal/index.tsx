type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="bg-black opacity-60 absolute inset-0"></div>
      <div className="relative bg-white w-3/4 h-3/4 rounded shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2  focus:outline-none"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
