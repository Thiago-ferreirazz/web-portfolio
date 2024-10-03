const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src="logo.svg" alt='' />
          </a>
          {/* button */}
          <button className='btn btn-sm transition-all duration-300 '>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
