import Image from 'next/image';

const Services = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
          What we do
        </h2>
        <div className="">
          <ul className="flex justify-center gap-[24px] xs:flex-col sm:flex-wrap lg:flex-row">
            <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
              <Image
                className=""
                src="/images/services-01.png"
                alt="Services logo"
                layout="intrinsic"
                width={40}
                height={40}
              />
              <h4 className="text-darkOrange font-rye text-[24px]">
                Artistic tattoo
              </h4>
              <p className="text-gray font-playfair text-[16px]">
                Thanks to their solid experience and artistic skills, the
                specialists of our salon will make any image on your body,
                achieving amazing results.
              </p>
            </li>
            <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
              <Image
                className=""
                src="/images/services-02.png"
                alt="Services logo"
                layout="intrinsic"
                width={40}
                height={40}
              />
              <h4 className="text-darkOrange font-rye text-[24px]">Piercing</h4>
              <p className="text-gray font-playfair text-[16px]">
                Our experts do piercing of various parts of the body. They will
                listen to your wishes, if necessary, will advise. The main thing
                is that they will do everything “quickly and painlessly”, at the
                highest level.
              </p>
            </li>
            <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
              <Image
                className=""
                src="/images/services-03.png"
                alt="Services logo"
                layout="intrinsic"
                width={40}
                height={40}
              />
              <h4 className="text-darkOrange font-rye text-[24px]">
                Tattoo fix
              </h4>
              <p className="text-gray font-playfair text-[16px]">
                Tired of a tattoo? Or has it ceased to reflect the image and
                style of life, or is it at odds with today&apos;s realities? In
                this situation, the ideal option is to correct the tattoo.
              </p>
            </li>
            <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
              <Image
                className=""
                src="/images/services-04.png"
                alt="Services logo"
                layout="intrinsic"
                width={40}
                height={40}
              />
              <h4 className="text-darkOrange font-rye text-[24px]">
                Tattoo removal
              </h4>
              <p className="text-gray font-playfair text-[16px]">
                For the removal, correction of tattoos and permanent makeup,
                so-called ND YAG lasers are used, with a wavelength of 1064 nm
                and a pulse frequency of 1 to 5 Hz.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
