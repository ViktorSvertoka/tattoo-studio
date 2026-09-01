import Footer from '@/components/sections/Footer';
import GridList from '@/components/ui/GridList';
import PageHeader from '@/components/ui/PageHeader';

export const generateMetadata = () => {
  return {
    title: 'Gallery',
  };
};

export default function Gallery() {
  return (
    <>
      <main className="min-h-screen bg-bgAlpha">
        <PageHeader
          navigationLabel="Gallery navigation"
          secondaryHref="/blog"
          secondaryLabel="Blog"
        />

        <section className="container pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto mb-10 max-w-[720px] text-center sm:mb-14">
            <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.24em] text-darkOrange sm:text-[16px]">
              Selected work
            </p>
            <h1 className="mt-4 text-balance font-rye text-[42px] leading-tight text-white sm:text-[64px] lg:text-[76px]">
              Gallery
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8] sm:text-[20px]">
              A closer look at the detail, character, and craft behind our
              recent tattoo work.
            </p>
          </div>
          <GridList />
        </section>
      </main>
      <Footer />
    </>
  );
}
