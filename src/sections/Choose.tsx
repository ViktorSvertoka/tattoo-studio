const Choose = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[74px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
          Why choose us
        </h2>
        <ul className="flex justify-center xs:flex-col sm:flex-row lg:flex-row gap-[24px]">
          <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
            <h4 className="text-darkOrange font-orelega text-[40px]">15K</h4>
            <p className="text-gray font-playfair text-[16px]">Tattoo done</p>
          </li>
          <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
            <h4 className="text-darkOrange font-orelega text-[40px]">4K</h4>
            <p className="text-gray font-playfair text-[16px]">
              Satisfied customers
            </p>
          </li>
          <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
            <h4 className="text-darkOrange font-orelega text-[40px]">17+</h4>
            <p className="text-gray font-playfair text-[16px]">Award winning</p>
          </li>
          <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
            <h4 className="text-darkOrange font-orelega text-[40px]">1.2K</h4>
            <p className="text-gray font-playfair text-[16px]">Piercing done</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Choose;
