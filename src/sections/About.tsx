import Image from 'next/image';

const About = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[16px] sm:mt-[60px] lg:mt-[100px] xs:mb-[16px] sm:mb-[40px] lg:mb-[80px] xs:text-center sm:text-center lg:text-left">
          About us
        </h2>
        <div className="flex xs:flex-col sm:flex-col lg:flex-row xs:pb-[8px] sm:pb-[60px] lg:pb-[100px]">
          <div className="xs:mb-[16px] sm:mb-[40px] lg:mr-[135px]">
            <Image
              className="block sm:hidden"
              src="/images/about-mobile-2x.png"
              alt="About Image"
              layout="intrinsic"
              width={343}
              height={232}
            />
            <Image
              className="hidden sm:block lg:hidden"
              src="/images/about-tablet-2x.png"
              alt="About Image"
              layout="intrinsic"
              width={770}
              height={500}
            />
            <Image
              className="hidden lg:block"
              src="/images/about-desktop-2x.png"
              alt="About Image"
              layout="intrinsic"
              width={628}
              height={494}
            />
          </div>
          <div className="lg:w-[520px]">
            <h3 className="text-white font-rye xs:text-[24px] sm:text-[30px] lg:text-[30px]">
              Style and vibe
            </h3>
            <p className="text-gray xs:mt-[8px] sm:mt-[16px] lg:mt-[16px] xs:text-[16px] sm:text-[20px] lg:text-[20px]">
              Welcome to Good Luck Tattoo Studio, where art and ink converge to
              create unforgettable masterpieces. Our studio is a haven for
              self-expression, where we believe that every tattoo tells a unique
              story.
            </p>
            <p className="text-gray xs:mt-[8px] sm:mt-[16px] lg:mt-[16px] xs:text-[16px] sm:text-[20px] lg:text-[20px]">
              At Good Luck Tattoo Studio, we understand the significance of a
              tattoo as a lifelong commitment. That&apos;s why we take the time
              to listen to your ideas, offering personalized consultations to
              ensure that your tattoo is not just a design but a reflection of
              your story, values, and aspirations.
            </p>
            <p className="text-gray xs:mt-[8px] sm:mt-[16px] lg:mt-[16px] xs:text-[16px] sm:text-[20px] lg:text-[20px]">
              Welcome to the world of Good Luck Tattoo Studio, where your dreams
              become art on your skin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
