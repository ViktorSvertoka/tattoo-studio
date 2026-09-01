const dataChoose = [
  { id: 1, number: '15K', text: 'Tattoos completed' },
  { id: 2, number: '4K', text: 'Happy clients' },
  { id: 3, number: '17+', text: 'Awards won' },
  { id: 4, number: '1.2K', text: 'Piercings completed' },
];

const Choose = () => {
  return (
    <section className="section-shell bg-black">
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
          Why choose us
        </h2>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {dataChoose.map(({ id, number, text }) => (
            <li
              key={id}
              className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#191a22] px-4 py-8 text-center"
            >
              <strong className="font-orelega text-[42px] leading-none text-darkOrange sm:text-[48px]">
                {number}
              </strong>
              <p className="mt-5 font-playfair text-[16px] text-[#b8b8b8] sm:text-[17px]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Choose;
