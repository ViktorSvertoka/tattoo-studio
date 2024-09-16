import Link from 'next/link';

export default function Gallery() {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center justify-between sm:pt-[19px]">
          <Link href="/" className="text-white">
            Go Home
          </Link>
          <h1 className="text-white">Gallery</h1>
        </div>
      </div>
    </section>
  );
}
