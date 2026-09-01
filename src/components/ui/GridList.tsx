import Image from 'next/image';
import { tattooImages } from '../../data/dataGallery';

export default function GridList() {
  return (
    <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-6 sm:gap-5 lg:grid-cols-12 lg:gap-6">
      {tattooImages.map(({ src, text, desktopSpan }, index) => (
        <li
          key={src.src}
          className={`${desktopSpan} relative col-span-1 aspect-[3/4] overflow-hidden rounded-2xl shadow-card sm:col-span-2 sm:aspect-[4/5] lg:h-[400px] lg:aspect-auto`}
        >
          <Image
            src={src}
            alt={text}
            fill
            priority={index === 0}
            sizes="(min-width: 1440px) 326px, (min-width: 834px) calc((100vw - 104px) / 3), (min-width: 375px) calc((100vw - 48px) / 2), calc(100vw - 32px)"
            className="object-cover transition-transform duration-500 hover:scale-[1.025]"
          />
        </li>
      ))}
    </ul>
  );
}
