import Link from 'next/link';

export const generateMetadata = () => {
  return {
    title: 'Blog',
  };
};

export default function Blog() {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center justify-between sm:pt-[19px]">
          <Link href="/" className="text-white">
            Go Home
          </Link>
          <h1 className="text-white">Blog</h1>
        </div>
      </div>
    </section>
  );
}
