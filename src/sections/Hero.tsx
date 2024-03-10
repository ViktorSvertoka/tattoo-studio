import Navbar from "../components/Navbar";
import Logo from "../../public/icons/logo.svg";

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col bg-heroMobile sm:bg-heroTablet lg:bg-heroDesktop bg-cover bg-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo width={36} height={36} />
          <Navbar />
        </div>
        <h1 className="text-white font-rye lg:text-[80px] lg:pt-[250px] lg:w-[707px] leading-[80px] font-normal">
          GOOD LUCK TATTOO STUDIO
        </h1>
        <p className="text-white font-playfair lg:text-[24px] lg:pt-[37px] lg:w-[361px] leading-[36px] font-normal">
          "Tattoos are an expression of freedom and individuality."
        </p>
        <button
          type="button"
          className="text-black bg-[darkOrange] lg:text-[24px] lg:w-[300px] lg:rounded-[50px] py-4 flex items-center justify-center mb-[283px] mt-[63px] "
        >
          Online-booking
        </button>
      </div>
    </section>
  );
};

export default Hero;
