import Slider from '../ui/Slider';

const Team = () => {
  return (
    <section
      id="artists"
      className="bg-bgAlpha xs:pt-[24px] sm:pt-[40px] lg:pt-[74px] sm:pb-[60px] lg:pb-[100px]"
    >
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
          Our artists
        </h2>
        <Slider />
      </div>
    </section>
  );
};

export default Team;
