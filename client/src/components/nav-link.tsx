import { Link } from 'react-router-dom';

interface LinksProp {
  title: string;
  link_to: string;
  icon: React.ReactNode;
}

export default function NavLinks({ title, link_to, icon }: LinksProp) {
  return (
    <Link
      to={link_to}
      className='focus:shadow-outline rounded-full border border-transparent p-1 tracking-widest focus:outline-none'
    >
      <title>{title}</title>
      {icon}
    </Link>
  );
}
