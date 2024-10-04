import LoginBtn from './google-oauth-btn';

const Navbar = () => {
  return (
    <>
      <div className='absolute top-0 z-10'>
        <div className='m-5 flex items-center justify-start align-middle'>
          <LoginBtn />
        </div>
      </div>
    </>
  );
};

export default Navbar;
