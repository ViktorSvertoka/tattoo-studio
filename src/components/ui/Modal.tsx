import { RiCloseLine } from 'react-icons/ri';

const Modal = ({ setIsOpen }) => {
  return (
    <div className="darkBG" onClick={() => setIsOpen(false)}>
      <div className="centered">
        <div className="bg-black rounded-[25px] lg:w-[780px] lg:h-[800px]">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine className="text-white" />
          </button>
          <div className="p-[50px]">
            <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:text-center sm:text-center lg:text-center">
              Online-booking
            </h2>
            <form
              action=""
              className="flex flex-col xs:w-[343px] sm:w-[458px] lg:w-[458px] sm:m-auto sm:mb-[60px]"
            >
              <label htmlFor="" className="text-gray font-playfair text-[16px]">
                Name
              </label>
              <input
                type="text"
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
              />
              <label htmlFor="" className="text-gray font-playfair text-[16px]">
                Email
              </label>
              <input
                type="text"
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
              />
              <label htmlFor="" className="text-gray font-playfair text-[16px]">
                Phone
              </label>
              <input
                type="text"
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
              />
              <label htmlFor="" className="text-gray font-playfair text-[16px]">
                Message
              </label>
              <textarea
                name=""
                id=""
                className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[110px] pl-[10px]"
              ></textarea>
              <p className="text-gray mt-[13px]">
                Givin your information you agree with privacy policy.
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
