import ContactForm from '../ui/ContactForm';

const Contacts = () => {
  return (
    <section id="contacts" className="bg-bgAlpha">
      <div className="sm:container lg:items-center flex xs:flex-col sm:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[100px] xs:mb-[32px] sm:mb-[40px] lg:mb-[30px] xs:text-center sm:text-center lg:text-center">
            Online-booking
          </h2>
          <ContactForm />
        </div>
        <div className="bg-contactsMobile sm:bg-contactsTablet lg:bg-contactsDesktop bg-cover bg-center xs:w-[375px] xs:h-[660px] sm:w-[834px] sm:h-[449px] lg:w-[708px] lg:h-[633px] sm:pt-[30px] sm:pl-[60px] lg:pt-[100px] lg:pl-[110px]">
          <div className="xs:pt-[300px] xs:pl-[80px] sm:pt-[0px] sm:pl-[0px]">
            <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mb-[15px] sm:mb-[25px] lg:mb-[40px]">
              Contacts
            </h2>
            <ul className="text-white font-playfair xs:text-[16px] sm:text-[20px] lg:text-[20px] flex flex-col gap-[20px]">
              <li>
                <p>Good Luck Tattoo Studio</p>
              </li>
              <li>
                <p>Miramar Beach</p>
              </li>
              <li>
                <p>​good-luck.tattoo@gmail.com</p>
              </li>
              <li>
                <p>​850-424-6584</p>
              </li>
              <li>
                <p>​Tattoo Shop Hours:</p>
              </li>
              <li>
                <p>Sunday - Saturday 1pm - 9pm​</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
