import Navbar from '../components/Navbar';
import Logo from '../../public/icons/logo.svg';
import Menu from '../../public/icons/mobile-menu.svg';

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col bg-heroMobile sm:bg-heroTablet lg:bg-heroDesktop bg-cover bg-center">
      <div className="container">
        <div className="flex items-center justify-between sm:pt-[19px]">
          <a href="#">
            <Logo width={36} height={36} />
          </a>
          <Navbar />
          <button className="md:hidden" type="button">
            <Menu width={36} height={36} />
          </button>
        </div>

        <h1 className="text-white font-rye xs:text-[36px] xs:mt-[508px] xs:w-[320px] xs:leading-[36px] xs:text-center sm:text-left lg:text-left sm:text-[64px] sm:mt-[670px] sm:w-[566px] sm:leading-[72px] lg:text-[80px] lg:mt-[155px] lg:w-[707px] lg:leading-[80px] font-normal xs:mx-auto sm:mx-0 lg:mx-0">
          GOOD LUCK TATTOO STUDIO
        </h1>
        <p className="text-white font-playfair xs:text-[16px] xs:pt-[20px] xs:w-[248px] xs:leading-[24px] xs:text-center sm:text-left lg:text-left sm:text-[24px] sm:pt-[40px] sm:w-[361px] sm:leading-[36px] lg:text-[24px] lg:pt-[37px] lg:w-[361px] lg:leading-[36px] font-normal xs:mx-auto sm:mx-0 lg:mx-0">
          &quot;Tattoos are an expression of freedom and individuality.&quot;
        </p>
        <button
          type="button"
          className="hover:text-black text-[darkOrange] hover:bg-[darkOrange] bg-transparent focus:border-transparent border-2 hover:border-2 hover:border-[darkOrange] border-[darkOrange] text-[24px] xs:w-[343px] sm:w-[300px] lg:w-[300px] rounded-[50px] py-4 flex items-center justify-center xs:mb-[26px] sm:mb-[150px] lg:mb-[267px] mt-[63px]"
        >
          Online-booking
        </button>
      </div>
    </section>
  );
};

export default Hero;
