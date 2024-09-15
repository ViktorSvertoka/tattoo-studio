import Image from 'next/image';

const imageSources = [
  {
    src: '/images/about-mobile-2x.png',
    alt: 'About Image',
    width: 343,
    height: 232,
    classes: 'block sm:hidden',
  },
  {
    src: '/images/about-tablet-2x.png',
    alt: 'About Image',
    width: 770,
    height: 500,
    classes: 'hidden sm:block lg:hidden',
  },
  {
    src: '/images/about-desktop-2x.png',
    alt: 'About Image',
    width: 628,
    height: 494,
    classes: 'hidden lg:block',
  },
];

const ImageComponent = () => (
  <div className="xs:mb-[16px] sm:mb-[40px] lg:mr-[135px]">
    {imageSources.map(({ src, alt, width, height, classes }, index) => (
      <Image
        key={index}
        className={classes}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    ))}
  </div>
);

export default ImageComponent;
