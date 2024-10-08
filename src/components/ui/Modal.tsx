import { RiCloseLine } from 'react-icons/ri';
import { useEffect } from 'react';

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
        <div className="bg-black rounded-[25px] lg:w-[680px] lg:h-[750px]">
          <button
            className="cursor-pointer py-[16px] px-[16px] absolute right-0 top-0"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine className="text-white hover:text-darkOrange w-[40px] h-[40px]" />
          </button>
          <div className="p-[50px]">
            <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:text-center sm:text-center lg:text-center">
              Online-booking
            </h2>
            <form className="flex flex-col xs:w-[343px] sm:w-[458px] lg:w-[458px] sm:m-auto sm:mb-[60px]">
              <label
                htmlFor="name"
                className="text-gray font-playfair text-[16px]"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
              />
              <label
                htmlFor="email"
                className="text-gray font-playfair text-[16px]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
              />
              <label
                htmlFor="phone"
                className="text-gray font-playfair text-[16px]"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
              />
              <label
                htmlFor="message"
                className="text-gray font-playfair text-[16px]"
              >
                Message
              </label>
              <textarea
                id="message"
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[110px] pl-[10px]"
              ></textarea>
              <p className="text-gray mt-[13px]">
                Giving your information you agree with privacy policy.
              </p>
              <button
                type="submit"
                className="hover:text-black text-darkOrange hover:bg-darkOrange bg-transparent focus:border-transparent border-2 hover:border-2 hover:border-darkOrange border-darkOrange text-[24px] xs:w-[343px] sm:w-[220px] lg:w-[220px] rounded-[50px] py-4 flex items-center justify-center mt-[45px] ml-auto mr-auto xs:mb-[32px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
