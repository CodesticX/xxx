import Home from '@/pages/home';
import {
  IconSettings,
  IconCirclesFilled,
  IconHome,
  IconBrandZoom,
  IconAi,
} from '@tabler/icons-react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavLinks from '../nav-link';

interface LinkItem {
  title: string;
  icon: React.ReactNode;
  to: string;
}

export default function AppLayout() {
  const location = useLocation();

  const links: LinkItem[] = [
    {
      title: 'AI Health Assistant',
      icon: (
        <IconAi className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      to: '/home/ai-health-assistant',
    },
    {
      title: 'Video Consultation',
      icon: (
        <IconBrandZoom className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      to: '/home/video-consultations',
    },
    {
      title: 'Cycle Tracker',
      icon: (
        <IconCirclesFilled className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      to: '/home/cycle-tracker',
    },

    {
      title: 'Setting',
      icon: (
        <IconSettings className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      to: '/home/setting',
    },
  ];
  return (
    <>
      <div className='animated fixed top-0 z-40 h-16 w-full bg-white text-gray-700 shadow-sm'>
        <div className='mx-auto flex max-w-screen-xl flex-col px-2 md:flex-row md:items-center md:justify-between'>
          <div className='flex w-full flex-row items-center justify-between p-4'>
            <Link
              to='/'
              className='focus:shadow-outline rounded-lg tracking-widest focus:outline-none'
            >
              <svg
                className='h-8 w-8 text-pink-600'
                width='54'
                height='54'
                viewBox='0 0 54 54'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Care AI</title>
                <path
                  fill='currentColor'
                  d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z'
                ></path>
              </svg>
            </Link>

            <div className='flex items-center justify-center gap-3 align-middle'>
              {links.map((link, idx) => (
                <NavLinks
                  key={idx}
                  link_to={link.to}
                  title={link.title}
                  icon={link.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center align-middle'>
        {location.pathname == '/home' ? <Home /> : <Outlet />}
      </div>
    </>
  );
}
