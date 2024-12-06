import ImageComponent from '../ui/AboutImage';
import TextComponent from '../ui/TextComponent';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[16px] sm:mt-[60px] lg:mt-[100px] xs:mb-[16px] sm:mb-[40px] lg:mb-[80px] text-center">
          About us
        </h2>
        <div className="flex xs:flex-col sm:flex-col lg:flex-row xs:pb-[8px] sm:pb-[60px] lg:pb-[100px]">
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
