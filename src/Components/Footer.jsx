import React from 'react';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='FootSec'>
      <div className="text">
        <h1>CONTACT ME :</h1>  <br /><br />
        EMAIL : <br />aditya.bhattacharjee706@gmail.com <br /><br />
        PHONE : +91 9205325227 <br />
      </div>

      
      <button className="scroll-to-top-button" onClick={handleScrollToTop}>
        ^
      </button>
    </div>
  );
}

export default Footer;
