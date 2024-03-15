import styles from "./styles.module.scss";
import { AiFillCodepenCircle } from 'react-icons/ai';
import { useRef, useState } from 'react';
import WhoAmI from "../Article";
import ProjectsList from "../Projects";
import AboutPage from "../AboutPage";
import Contact from "../Contact";
import { IoMenuSharp } from "react-icons/io5";


const HomePage = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [showNav, setShowNav] = useState<boolean>(false);


  const executeScroll = (targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView();
    }
  }

  return (
  <div className={styles.header_container}>
    <div className={styles.header_name}>
      <div className={styles.logo}>
        <AiFillCodepenCircle
          width={40} 
          height={40}
        />
        <div 
          className={`${styles.logo_name}`}>
          <h3>Artur Baghdanyan</h3>
          <p>Front End developer</p>
        </div>
      </div>

      <ul className={styles.header_nav}>
        <li onClick={() => executeScroll(myRef)}>Home</li>
        <li onClick={() => executeScroll(aboutRef)}>About</li>
        <li onClick={() => executeScroll(projectsRef)}>Projects</li>
        <li onClick={() => executeScroll(contactRef)}>Contact</li>
      </ul>

      <button 
        className={styles.header_button} 
        onClick={() => setShowNav(!showNav)}
      >
        <IoMenuSharp />
      </button>

    {showNav && (
      <div style={{ zIndex: 10 }}>
       <button 
        className={styles.close}
        onClick={() => setShowNav(!showNav)}
        >
        x
      </button>
      <ul className={`${styles.mobile_nav}`}>
        <li onClick={() => executeScroll(myRef)}>Home</li>
        <li onClick={() => executeScroll(aboutRef)}>About</li>
        <li onClick={() => executeScroll(projectsRef)}>Projects</li>
        <li onClick={() => executeScroll(contactRef)}>Contact</li>
      </ul>
      </div>
     
    )}
      
    </div>
    <WhoAmI />
    <div className={styles.root_components}>
      <div ref={aboutRef}><AboutPage /></div>
      <div ref={projectsRef}><ProjectsList /></div>
      <div ref={contactRef}><Contact /></div>
    </div> 
  </div>
);
}
export default HomePage;