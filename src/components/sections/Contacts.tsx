import ContactForm from '../ui/ContactForm';

const Contacts = () => {
  return (
    <section id="contacts" className="section-shell bg-bgAlpha">
      <div className="container">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
            <h2 className="font-rye text-[32px] leading-tight text-white sm:text-[44px] lg:text-[48px]">
              Book an appointment
            </h2>
            <p className="mt-4 max-w-[540px] font-playfair text-[17px] leading-relaxed text-[#b8b8b8]">
              Tell us what you have in mind. We usually respond within one
              business day to discuss the details.
            </p>
            <ContactForm />
          </div>

          <div className="relative min-h-[580px] bg-contactsMobile bg-cover bg-center sm:bg-contactsTablet lg:min-h-full lg:bg-contactsDesktop">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,18,0.94)_0%,rgba(10,12,18,0.76)_48%,rgba(10,12,18,0.18)_100%)]"
            />
            <div className="relative z-10 flex h-full min-h-[580px] max-w-[440px] flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
              <h2 className="font-rye text-[32px] text-white sm:text-[44px] lg:text-[48px]">
                Contact us
              </h2>
              <address className="mt-8 not-italic">
                <ul className="flex flex-col gap-4 font-playfair text-[17px] leading-relaxed text-white sm:text-[18px]">
                  <li>
                    <strong className="font-semibold">
                      Good Luck Tattoo Studio
                    </strong>
                  </li>
                  <li>Miramar Beach, Florida</li>
                  <li>
                    <a
                      href="mailto:good-luck.tattoo@gmail.com"
                      className="underline decoration-darkOrange underline-offset-4 transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
                    >
                      good-luck.tattoo@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+18504246584"
                      className="underline decoration-darkOrange underline-offset-4 transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
                    >
                      +1 850-424-6584
                    </a>
                  </li>
                  <li className="mt-2">
                    <span className="block text-[#b8b8b8]">Studio hours</span>
                    Sunday–Saturday, 1:00 PM–9:00 PM
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
