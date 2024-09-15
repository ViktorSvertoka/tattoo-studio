import Navbar from '@/components/ui/Navbar';

export default function Gallery() {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center justify-between sm:pt-[19px]">
          <Navbar />
          <h1 className="text-white">Gallery</h1>
        </div>
      </div>
    </section>
  );
}
