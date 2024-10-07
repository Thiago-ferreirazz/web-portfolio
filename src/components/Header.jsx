// Scroll
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img className="h-40 w-40" src="loggi.png" alt='' />
          </a>
          {/* button */}
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
          >
          <button className=' btn btn-sm'>Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
