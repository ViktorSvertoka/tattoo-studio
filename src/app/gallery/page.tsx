import Link from 'next/link';
import GridList from '../../components/ui/GridList';
import GoBack from '../../../public/icons/go-back-arrow.svg';
import Footer from '@/components/sections/Footer';

export const generateMetadata = () => {
  return {
    title: 'Gallery',
  };
};

export default function Gallery() {
  return (
    <>
      <section className="bg-bgAlpha">
        <div className="container">
          <div className="flex items-center w-full sm:pt-[20px] xs:mb-[20px] sm:mb-[20px] lg:mb-[20px]">
            <Link
              href="/"
              className="group text-white hover:text-darkOrange flex items-center mr-auto font-rye xs:text-[14px] sm:text-[24px] lg:text-[24px] transition-colors duration-300 ease-in-out"
            >
              <GoBack
                width={40}
                height={40}
                className="mr-4 transition-colors duration-300 ease-in-out group-hover:fill-white"
              />
              Go Home
            </Link>
            <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] text-center flex-grow">
              Gallery
            </h2>
            <Link
              href="/blog"
              className="group text-white hover:text-darkOrange flex items-center ml-auto font-rye xs:text-[14px] sm:text-[24px] lg:text-[24px] transition-colors duration-300 ease-in-out"
            >
              Go Blog
              <GoBack
                className="rotate-180 ml-4 transition-colors duration-300 ease-in-out group-hover:fill-white"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <GridList />
        </div>
      </section>
      <Footer />
    </>
  );
}
