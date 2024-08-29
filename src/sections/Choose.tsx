const dataChoose = [
  { id: 1, number: '15K', text: 'Tattoo done' },
  { id: 2, number: '4K', text: 'Satisfied customers' },
  { id: 3, number: '17+', text: 'Award winning' },
  { id: 4, number: '1.2K', text: 'Piercing done' },
];

const Choose = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[74px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
          Why choose us
        </h2>
        <ul className="flex justify-center xs:flex-col sm:flex-row lg:flex-row gap-[24px]">
          {dataChoose.map(({ id, number, text }) => (
            <li
              key={id}
              className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]"
            >
              <h4 className="text-darkOrange font-orelega text-[40px]">
                {number}
              </h4>
              <p className="text-gray font-playfair text-[16px]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Choose;
