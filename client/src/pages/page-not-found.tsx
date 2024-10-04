import image from '@/assets/page-not-found.png';

const PageNotFound = () => {
  return (
    <>
      <div className='flex h-screen w-screen items-center bg-gray-100'>
        <div className='container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row'>
          <div className='max-w-md'>
            <div className='font-dark text-5xl font-bold'>404</div>
            <p className='text-2xl font-light leading-normal md:text-3xl'>
              Sorry we couldn't find this page.
            </p>
            <p className='mb-8'>
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <button className='focus:shadow-outline-pink inline rounded-lg border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-pink-700 focus:outline-none active:bg-pink-600'>
              Back to Homepage
            </button>
          </div>
          <div className='max-w-lg'>
            <img src={image} alt='page-not-found' />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
