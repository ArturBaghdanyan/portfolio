import Link from 'next/link';
import styles from "./styles.module.scss";
import Code from 'next/image';
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';

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
  
  // const myRef = useRef<HTMLDivElement | null>(null);
  // const projectsRef = useRef<HTMLDivElement | null>(null);
  // const aboutRef = useRef<HTMLDivElement | null>(null);
  // const contactRef = useRef<HTMLDivElement | null>(null);

  // const executeScroll = (targetRef: React.RefObject<HTMLDivElement | null>) => {
  //   if (targetRef.current) {
  //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // function NavLink({ onClick, children }: any) {
  //   return <div onClick={onClick}>{children}</div>;
  // }

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
    </div>
    {/* <WhoAmI /> */}
{/* 
    <div className={styles.header_contact}>
      <NavLink onClick={() => executeScroll(myRef)}>Home</NavLink>
      <NavLink onClick={() => executeScroll(aboutRef)}>About</NavLink>
      <NavLink onClick={() => executeScroll(projectsRef)}>Projects</NavLink>
      <NavLink onClick={() => executeScroll(contactRef)}>Contact</NavLink>
    </div>
    <div ref={aboutRef}><About /></div>
    <div ref={projectsRef}><ProjectsList /></div>
    <div ref={contactRef}><Contact /></div> */}

    <nav className={styles.header_contact}>
      <Link href='/'>Home</Link>
      <Link href='/AboutPage'>About</Link>
      <Link href='/Projects'>Projects</Link>
      <Link href='/Contact'>Contact</Link>
    </nav>
  </div>
</header>
);
}
export default Header;