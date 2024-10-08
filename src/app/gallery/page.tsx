import Link from 'next/link';

export default function Gallery() {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center justify-between sm:pt-[19px]">
          <Link href="/" className="text-white">
            Go Home
          </Link>
          <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[16px] sm:mt-[60px] lg:mt-[100px] xs:mb-[16px] sm:mb-[40px] lg:mb-[80px] text-center">
            Gallery
          </h2>
        </div>
      </div>
    </section>
  );
}
