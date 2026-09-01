import Slider from '../ui/Slider';

const Team = () => {
  return (
    <section
      id="artists"
      className="section-shell bg-bgAlpha"
    >
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
          Our artists
        </h2>
        <Slider />
      </div>
    </section>
  );
};

export default Team;
