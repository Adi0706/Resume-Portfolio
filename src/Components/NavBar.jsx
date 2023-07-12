import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  

  return (
    <>
      <nav>
        <ul className='icon-tray'>
          <li className='icon'><a href="https://www.instagram.com/adityaxbhattacharjee/"><FaInstagram /></a></li>
          <li className='icon'><a href="https://www.linkedin.com/in/aditya-bhattacharjee-288462215/"><FaLinkedinIn /></a></li>
          <li className='icon'><a href='https://github.com/Adi0706'><FaGithub /></a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
