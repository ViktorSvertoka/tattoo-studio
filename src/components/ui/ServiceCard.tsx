import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, text }) => {
  return (
    <li className="flex min-h-[320px] flex-col items-center rounded-2xl border border-white/10 bg-[#191a22] px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-darkOrange/50">
      <Image src={imageSrc} alt="" width={56} height={56} />
      <h3 className="mt-7 font-rye text-[22px] leading-tight text-darkOrange">
        {title}
      </h3>
      <p className="mt-5 font-playfair text-[16px] leading-[1.65] text-[#b8b8b8]">
        {text}
      </p>
    </li>
  );
};

export default ServiceCard;
