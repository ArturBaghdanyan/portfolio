import styles from "./styles.module.scss";
import Code from 'next/image';
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import WhoAmI from "../Article";
import ProjectsList from "../Projects";
import AboutPage from "../AboutPage";
import Contact from "../Contact";

type HeaderProps = {
  isHeaderFixed: boolean;
  setIsHeaderFixed: Dispatch<SetStateAction<boolean>>;
};

const Header:FC<HeaderProps> = ({ isHeaderFixed, setIsHeaderFixed }) => {
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };
  
  const myRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const executeScroll = (targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView();
    }
  }

  return (
  <header className={`${styles.root} ${isHeaderFixed ? styles.sticky : ''}`}>

  <div className={styles.header_container}>
    <div className={styles.header_name}>
      <div className={styles.logo}>
        <Code
          src='/assets/header/code.png' alt="code"
          width={40} height={40}
        />
        <div className={styles.logo_name}>
          <h3>Artur Baghdanyan</h3>
          <p>Front End developer</p>
        </div>
      </div>
      <ul className={styles.header_contact}>
        <li onClick={() => executeScroll(myRef)}>Home</li>
        <li onClick={() => executeScroll(aboutRef)}>About</li>
        <li onClick={() => executeScroll(projectsRef)}>Projects</li>
        <li onClick={() => executeScroll(contactRef)}>Contact</li>
      </ul>
    </div>
    <WhoAmI />
  </div>
  <div className="flex flex-col mt-24 relative">
    <div ref={aboutRef}><AboutPage /></div>
    <div ref={projectsRef}><ProjectsList /></div>
    <div ref={contactRef}><Contact /></div>
  </div>

    {/* <nav className={styles.header_contact}>
      <Link href='/'>Home</Link>
      <Link href='/AboutPage'>About</Link>
      <Link href='/Projects'>Projects</Link>
      <Link href='/Contact'>Contact</Link>
    </nav> */}
</header>
);
}
export default Header;