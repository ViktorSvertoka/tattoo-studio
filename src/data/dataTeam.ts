import imageMember1 from '../../public/images/team-01.png';
import imageMember2 from '../../public/images/team-02.png';
import imageMember3 from '../../public/images/team-03.png';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const commonSocialLinks = [
  { href: '#', icon: FaSquareFacebook },
  { href: '#', icon: AiFillInstagram },
  { href: '#', icon: TbBrandYoutubeFilled },
];

const commonRole = 'Tattoo artist';

export const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: commonRole,
    imageSrc: imageMember1,
    socialLinks: commonSocialLinks,
  },
  {
    id: 2,
    name: 'Michele Doe',
    role: commonRole,
    imageSrc: imageMember2,
    socialLinks: commonSocialLinks,
  },
  {
    id: 3,
    name: 'Alan Black',
    role: commonRole,
    imageSrc: imageMember3,
    socialLinks: commonSocialLinks,
  },
];
