const Contacts = () => {
  return (
    <section className="">
      <div className="container">
        <div>
          <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[74px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
            Online-booking
          </h2>
          <form action="" className="flex flex-col w-[458px]">
            <label htmlFor="" className="text-gray font-playfair text-[16px]">
              Name
            </label>
            <input
              type="text"
              className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white"
            />
            <label htmlFor="" className="text-gray font-playfair text-[16px]">
              Phone
            </label>
            <input
              type="text"
              className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white"
            />
            <label htmlFor="" className="text-gray font-playfair text-[16px]">
              Message
            </label>
            <textarea
              name=""
              id=""
              className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="text-black hover:text-[darkOrange] bg-[darkOrange] hover:bg-transparent border-transparent border-2 hover:border-2 border-[black] hover:border-[darkOrange] text-[24px] xs:w-[343px] sm:w-[300px] lg:w-[300px] rounded-[50px] py-4 flex items-center justify-center xs:mb-[26px] sm:mb-[150px] lg:mb-[267px] mt-[63px]"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[74px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
            Contacts
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
