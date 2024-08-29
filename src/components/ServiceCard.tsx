import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, text }) => {
  return (
    <li className="flex flex-col items-center text-center gap-[30px] py-[30px] w-[302px]">
      <Image src={imageSrc} alt={`${title} icon`} width={40} height={40} />
      <h4 className="text-darkOrange font-rye text-[24px]">{title}</h4>
      <p className="text-gray font-playfair text-[16px]">{text}</p>
    </li>
  );
};

export default ServiceCard;
