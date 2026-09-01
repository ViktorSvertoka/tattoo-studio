const dataChoose = [
  { id: 1, number: '15K', text: 'Tattoo done' },
  { id: 2, number: '4K', text: 'Satisfied customers' },
  { id: 3, number: '17+', text: 'Award winning' },
  { id: 4, number: '1.2K', text: 'Piercing done' },
];

const Choose = () => {
  return (
    <section className="section-shell bg-black">
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
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
