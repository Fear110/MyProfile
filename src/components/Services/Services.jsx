import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './SakarPudasaini.pdf';

function Services() {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate{' '}
          delectus obcaecati similique quo quasi,
          <br /> ut esse quia veniam, inventore
        </span>
        <div
          className="blur s-blur1"
          style={{ background: '#ABF1FF94' }}></div>
        <a
          href={Resume}
          download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      <div className="cards">
        <div className="bardbundle">
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            details={'Figma, Adobe, PowerPoint'}
          />
        </div>
        <div className="bardbundle1">
          <Card
            emoji={Glasses}
            heading={'Developer'}
            details={'HTML, CSS, JavaScript, React'}
          />
        </div>
        <div className="bardbundle2">
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            details={'Lorem ipsum dolor sit, amet consectetur a'}
          />
        </div>
        <div className="blur s-blur2" style={{background:'var{--purple}'}}></div>
      </div>
    </div>
  );
}

export default Services;
