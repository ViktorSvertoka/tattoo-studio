import Image from 'next/image';
import NotFoundImage from '../../public/images/404.png';

export const generateMetadata = () => {
  return {
    title: 'Page 404',
  };
};

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white text-4xl font-semibold mt-[100px]">
        <p>Oops! Page not found...</p>
        <Image
          src={NotFoundImage}
          alt="Page not found 404"
          className="mt-[50px]"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default NotFound;
