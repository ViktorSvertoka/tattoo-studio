import Image, { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

interface SocialLink {
  href: string;
  icon: IconType;
}

interface TeamMemberCardProps {
  image: StaticImageData;
  name: string;
  role: string;
  socialLinks: SocialLink[];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  role,
  socialLinks,
}) => {
  return (
    <div className="flex flex-col items-center text-center py-[30px] w-[302px]">
      <Image src={image} alt={`${name} image`} />
      <h4 className="text-darkOrange font-rye text-[24px] mt-[30px]">{name}</h4>
      <p className="text-white font-playfair text-[20px]">{role}</p>
      <ul className="flex gap-[16px] mt-[16px]">
        {socialLinks.map(({ href, icon: Icon }, index) => (
          <li key={index}>
            <a href={href} className="cursor-pointer">
              <Icon className="h-[36px] w-[36px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMemberCard;
