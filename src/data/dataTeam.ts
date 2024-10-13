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
    name: 'John Smith',
    role: commonRole,
    src: imageMember1,
    alt: 'Tattoo master',
    icon: commonSocialLinks,
  },
  {
    name: 'Michele Doe',
    role: commonRole,
    src: imageMember2,
    alt: 'Tattoo master',
    icon: commonSocialLinks,
  },
  {
    name: 'Alan Black',
    role: commonRole,
    src: imageMember3,
    alt: 'Tattoo master',
    icon: commonSocialLinks,
  },
];
