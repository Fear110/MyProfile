import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={Wave}
        alt=""
        style={{ width: '100%' }}
      />
      <div className="f-content">
        <span>barcaboysakar@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/thisisfear_/">
            <Insta
              color="white"
              size={'3rem'}
            />
          </a>
          <a href="https://www.facebook.com/sakarpdi/">
            {' '}
            <Facebook
              color="white"
              size={'3rem'}
            />
          </a>
          <a href="https://github.com/Fear110">
            {' '}
            <Gitub
              color="white"
              size={'3rem'}
            />
          </a>

          <a href="https://www.linkedin.com/in/sakar-pudasaini-86b3a9183/">
            {' '}
            <Linkedin
              color="white"
              size={'3rem'}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
