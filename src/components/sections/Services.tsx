import ServiceCard from '../ui/ServiceCard';
import { dataServices } from '../../data/dataServices';

const Services = () => {
  return (
    <section className="section-shell bg-black">
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
          What we do
        </h2>
        <div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
