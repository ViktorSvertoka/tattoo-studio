import { useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';
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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-dialog-title"
        className="relative max-h-[92vh] w-full max-w-[680px] overflow-y-auto rounded-3xl border border-darkOrange/70 bg-[#191a22] shadow-2xl"
      >
        <button
          type="button"
          autoFocus
          aria-label="Close booking form"
          className="absolute right-3 top-3 z-10 cursor-pointer rounded-full p-3 text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
          onClick={() => setIsOpen(false)}
        >
          <RiCloseLine className="h-10 w-10" aria-hidden="true" />
        </button>
        <div className="p-6 pt-20 sm:p-10 sm:pt-16">
          <h2
            id="booking-dialog-title"
            className="font-rye text-[30px] text-white sm:text-[42px]"
          >
            Book an appointment
          </h2>
          <ContactForm idPrefix="booking-dialog" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
