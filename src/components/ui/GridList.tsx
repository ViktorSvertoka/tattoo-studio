import Image from 'next/image';
import { tattooImages } from '../../data/dataGallery';

export default function GridList() {
  return (
    <ul className="grid grid-cols-12 gap-4">
      {tattooImages.map(({ src, text, gridItem }, index) => (
        <li key={index} className={gridItem}>
          <Image className="object-cover h-[400px]" src={src} alt={text} />
        </li>
      ))}
    </ul>
  );
}
