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
      <section>
        <div className="container">
          <div className="flex items-center w-full sm:pt-[19px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px]">
            <Link href="/" className="text-white mr-auto">
              <GoBack width={40} height={40} />
            </Link>
            <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] text-center flex-grow">
              Gallery
            </h2>
          </div>

          <GridList />
        </div>
      </section>
      <Footer />
    </>
  );
}
