import { RiCloseLine } from 'react-icons/ri';
import { useEffect } from 'react';
import ContactForm from './ContactForm';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="bg-black/20 w-screen h-screen z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
      onClick={handleBackdropClick}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-black rounded-[25px] xs:w-[343px] xs:h-[680px] sm:w-[506px] sm:h-[740px] lg:w-[680px] lg:h-[750px] border-2 border-[darkOrange]">
          <button
            className="cursor-pointer py-[16px] px-[16px] absolute right-0 top-0"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine className="text-white hover:text-darkOrange w-[40px] h-[40px]" />
          </button>
          <div className="xs:p-[20px] p-[50px]">
            <h2 className="text-white font-rye xs:text-[24px] sm:text-[36px] lg:text-[48px] xs:text-center sm:text-center lg:text-center">
              Online-booking
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
