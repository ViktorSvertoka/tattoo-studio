const Contacts = () => {
  return (
    <section className="mt-[134px]">
      <div className="container lg:items-center flex xs:flex-col sm:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[100px] xs:mb-[32px] sm:mb-[40px] lg:mb-[30px] xs:text-center sm:text-center lg:text-center">
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
            <button
              type="submit"
              className="hover:text-black text-darkOrange hover:bg-darkOrange bg-transparent focus:border-transparent border-2 hover:border-2 hover:border-darkOrange border-darkOrange text-[24px] xs:w-[343px] sm:w-[220px] lg:w-[220px] rounded-[50px] py-4 flex items-center justify-center mt-[45px] ml-auto mr-auto xs:mb-[32px]"
            >
              Send
            </button>
          </form>
        </div>
        <div className="xs:bg-contactsMobile sm:bg-contactsTablet lg:bg-contactsDesktop bg-cover bg-center xs:w-[375px] xs:h-[660px] sm:w-[834px] sm:h-[449px] lg:w-[708px] lg:h-[633px] sm:pt-[30px] sm:pl-[60px] lg:pt-[100px] lg:pl-[110px]">
          <div className="xs:pt-[300px] xs:pl-[80px] sm:pt-[0px] sm:pl-[0px]">
            <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mb-[15px] sm:mb-[25px] lg:mb-[40px]">
              Contacts
            </h2>
            <ul className="text-white font-playfair xs:text-[16px] sm:text-[20px] lg:text-[20px] flex flex-col gap-[20px]">
              <li>
                <p>Good Luck Tattoo Studio</p>
              </li>
              <li>
                <p>Miramar Beach</p>
              </li>
              <li>
                <p>​good-luck.tattoo@gmail.com</p>
              </li>
              <li>
                <p>​850-424-6584</p>
              </li>
              <li>
                <p>​Tattoo Shop Hours:</p>
              </li>
              <li>
                <p>Sunday - Saturday 1pm - 9pm​</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
