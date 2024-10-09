import Image from 'next/image';
import { tattooImages } from '@/data/dataGallery';

export default function GridList() {
  return (
    <ul className="grid grid-cols-12 gap-4">
      {tattooImages.map(({ id, imgSrc, text, gridItem }) => (
        <li key={id} className={gridItem}>
          <Image className="object-cover h-[400px]" src={imgSrc} alt={text} />
        </li>
      ))}
    </ul>
  );
}
