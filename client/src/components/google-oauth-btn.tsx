import { Button } from './ui/button';

const LoginBtn = () => {
  return (
    <>
      <Button>
        <img
          className='mr-3 h-6 w-6'
          src='https://www.svgrepo.com/show/475656/google-color.svg'
          loading='lazy'
          alt='google logo'
        />
        <span>Login with Google</span>
      </Button>
    </>
  );
};

export default LoginBtn;
