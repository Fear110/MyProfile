import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import pp from '../../img/pp.png';

import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloationgDiv from '../FloationgDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Sakar Pudasaini</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/Fear110">
            {' '}
            <img
              src={Github}
              alt="Github"
            />
          </a>
          <a href="https://www.linkedin.com/in/sakar-pudasaini-86b3a9183/">
            <img
              src={LinkedIn}
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.instagram.com/thisisfear_">
            {' '}
            <img
              src={Instagram}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img
          src={Vector1}
          alt=""
        />
        <img
          src={Vector2}
          alt=""
        />
        <img
          src={pp}
          alt=""
        />

        <div className="floatimg0">
          <img
            src={glassesimoji}
            alt=""
          />
        </div>

        <div className="floatimg1">
          <FloationgDiv
            image={crown}
            text1="Web"
            text2="Developer"
          />
        </div>

        <div className="floatimg2">
          <FloationgDiv
            image={thumbup}
            text1="Best"
            text2="Award"
          />
        </div>

        {/* Blur divs */}
        <div className='blur'></div>
        <div className="blur bluebur"></div>
      </div>
    </div>
  );
};

export default Intro;
