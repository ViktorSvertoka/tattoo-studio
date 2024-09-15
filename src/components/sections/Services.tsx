import ServiceCard from '../ui/ServiceCard';
import { dataServices } from '../../data/dataServices';

const Services = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
          What we do
        </h2>
        <div className="">
          <ul className="flex justify-center gap-[24px] xs:flex-col sm:flex-row lg:flex-row sm:flex-wrap">
            {dataServices.map(({ id, imageSrc, title, text }) => (
              <ServiceCard
                key={id}
                imageSrc={imageSrc}
                title={title}
                text={text}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
