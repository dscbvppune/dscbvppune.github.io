import React from 'react';
import hack from './HeroSection.module.css';
import LandingSection from '../Landing/LandingSection';
import InfoSection from '../Info/InfoSection';
import TrackSection from '../Tracks/TrackSection';
import FaqSection from '../Faq/FaqSection';
import HackSponsors from '../Sponsers/HackSponsors';
import $ from "jquery";

class HeroSection extends React.Component {
  componentDidMount() {
    var section = $('li');

    function toggleAccordion() {
      section.removeClass(hack.active);
      $(this).addClass(hack.active);
    }

    section.on('click', toggleAccordion);
  }
  

  render() {
    return (
      <div>
      <div className={hack.herosection}  >
        <ul>
        <li className={hack.active}>
            <div className={hack.sectionTitle}>
              <h2><span style={{fontWeight:"700"}}>&lt;</span> HOME <span style={{fontWeight:"700"}}>&gt;</span></h2>
              <p>01</p>
            </div>
            <div className={hack.sectionContent}>
              <LandingSection />
            </div>
          </li>
          <li >
            <div className={hack.sectionTitle}>
              <h2><span style={{fontWeight:"700"}}>&lt;</span> ABOUT <span style={{fontWeight:"700"}}>&gt;</span></h2>
              <p>02</p>
            </div>
            <div className={hack.sectionContent}>
              <InfoSection />
            </div>
          </li>
          <li >
            <div className={hack.sectionTitle}>
              <h2><span style={{fontWeight:"700"}}>&lt;</span> TRACKS <span style={{fontWeight:"700"}}>&gt;</span></h2>
              <p>03</p>
            </div>
            <div className={hack.sectionContent}>
              <TrackSection />
            </div>
          </li>
          <li>
            <div className={hack.sectionTitle}>
              <h2><span style={{fontWeight:"700"}}>&lt;</span> SPONSORS <span style={{fontWeight:"700"}}>&gt;</span></h2>
              <p>04</p>
            </div>
            <div className={hack.sectionContent}>
            <HackSponsors />
            </div>
          </li>
          <li>
            <div className={hack.sectionTitle}>
              <h2><span style={{fontWeight:"700"}}>&lt;</span> FAQ <span style={{fontWeight:"700"}}>&gt;</span></h2>
              <p>05</p>
            </div>
            <div className={hack.sectionContent}>
            <FaqSection />
            </div>
          </li>
        </ul>
      </div>


      {/* COPY HERE */}
      <div className={hack.mobileheroSection} >
        <div className={hack.mobileSections}>
          <LandingSection />
          <InfoSection />
          <TrackSection />
          <HackSponsors />
          <FaqSection />
          
        </div>
      </div>

      </div>
    )
  }
}


export default HeroSection;