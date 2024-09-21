// import React from 'react';
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import CV from "../../assets/cv.pdf"
import {useTheme} from '../../common/ThemeContext';
function Hero(){
  const {theme,toggleTheme}=useTheme();
  const themeIcon=theme==='light' ? sun:moon;
  const twitterIcon=theme==='light' ? twitterLight:twitterDark;
  const linkedinIcon=theme==='light' ? linkedinLight:linkedinDark;
  const githubIcon=theme==='light' ? githubLight:githubDark;
  
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        src={heroImg} 
        className={styles.hero} 
        alt='Eshwar Profile Picture'
        />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt='Color Modes'
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
            J
            <br/>
            Eshwar
        </h1>
        <h2><b>Frontend Developer</b></h2>
        <span>
            <a href="https://x.com/Eshwar07857155" target="_blank">
                <img src={twitterIcon} alt="Twitter Icon" />
            </a>

            <a href="https://www.linkedin.com/in/j-eshwar-7b8854289/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>

            <a href="https://github.com/Eshwar187" target="_blank">
                <img src={githubIcon} alt="Github Icon" />
            </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for personel
          <br/>
          and commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>

  )
}

export default Hero
