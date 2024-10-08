import Image from 'next/image';
import { tattooImages } from '@/data/dataGallery';

export default function GridList() {
  return (
    <ul className="grid grid-cols-4 grid-rows-4 gap-6">
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[0].imgSrc}
          alt={tattooImages[0].text}
          width={302}
          height={400}
        />
      </li>
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[1].imgSrc}
          alt={tattooImages[1].text}
          width={302}
          height={400}
        />
      </li>
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[2].imgSrc}
          alt={tattooImages[2].text}
          width={302}
          height={400}
        />
      </li>
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[3].imgSrc}
          alt={tattooImages[3].text}
          width={302}
          height={400}
        />
      </li>
      <li className="col-span-2 row-span-1">
        <Image
          src={tattooImages[4].imgSrc}
          alt={tattooImages[4].text}
          width={628}
          height={400}
        />
      </li>
      <li className="col-span-2 row-span-1">
        <Image
          src={tattooImages[5].imgSrc}
          alt={tattooImages[5].text}
          width={628}
          height={400}
        />
      </li>
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[6].imgSrc}
          alt={tattooImages[6].text}
          width={410}
          height={400}
        />
      </li>
      <li className="col-span-2 row-span-1">
        <Image
          src={tattooImages[7].imgSrc}
          alt={tattooImages[7].text}
          width={410}
          height={400}
        />
      </li>
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[8].imgSrc}
          alt={tattooImages[8].text}
          width={410}
          height={400}
        />
      </li>
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[9].imgSrc}
          alt={tattooImages[9].text}
          width={302}
          height={400}
        />
      </li>
      <li className="col-span-2 row-span-1">
        <Image
          src={tattooImages[10].imgSrc}
          alt={tattooImages[10].text}
          width={628}
          height={400}
        />
      </li>
      <li className="col-span-1 row-span-1">
        <Image
          src={tattooImages[11].imgSrc}
          alt={tattooImages[11].text}
          width={302}
          height={400}
        />
      </li>
    </ul>
  );
}
