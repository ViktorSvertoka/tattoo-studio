import ImageComponent from '../ui/AboutImage';
import TextComponent from '../ui/TextComponent';

const About = () => {
  return (
    <section
      id="about"
      className="section-shell bg-bgAlpha"
    >
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
          About us
        </h2>
        <div className="flex flex-col lg:flex-row">
          <ImageComponent />
          <div className="lg:w-[520px]">
            <h3 className="text-darkOrange font-rye xs:text-[24px] sm:text-[30px] lg:text-[30px]">
              Style and vibe
            </h3>
            <TextComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
