import imageMember1 from '../../public/images/team-01.png';
import imageMember2 from '../../public/images/team-02.png';
import imageMember3 from '../../public/images/team-03.png';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

export const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Tattoo artist',
    imageSrc: imageMember1,
    socialLinks: [
      { href: '#', icon: FaSquareFacebook },
      { href: '#', icon: AiFillInstagram },
      { href: '#', icon: TbBrandYoutubeFilled },
    ],
  },
  {
    id: 2,
    name: 'Michele Doe',
    role: 'Tattoo artist',
    imageSrc: imageMember2,
    socialLinks: [
      { href: '#', icon: FaSquareFacebook },
      { href: '#', icon: AiFillInstagram },
      { href: '#', icon: TbBrandYoutubeFilled },
    ],
  },
  {
    id: 3,
    name: 'Alan Black',
    role: 'Tattoo artist',
    imageSrc: imageMember3,
    socialLinks: [
      { href: '#', icon: FaSquareFacebook },
      { href: '#', icon: AiFillInstagram },
      { href: '#', icon: TbBrandYoutubeFilled },
    ],
  },
];
