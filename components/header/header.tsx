import React, { useState } from "react";

import { AiFillCodepenCircle } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";

import styles from "./style.module.scss";

const Header = (props: any) => {
  const { myRef, aboutRef, projectsRef, contactRef } = props;
  const [showNav, setShowNav] = useState<boolean>(false);

  const executeScroll = (targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView();
    }
  };

  return (
    <header className={`${styles.header} container-spacing`}>
      <div className={styles.header_container}>
        <div className={styles.header_container_logo}>
          <AiFillCodepenCircle width={40} height={40} />
          <div className={`${styles.header_container_logo_name}`}>
            <h3>Artur Baghdanyan</h3>
            <p>Front End developer</p>
          </div>
        </div>

        <ul className={styles.header_container_nav}>
          <li onClick={() => executeScroll(myRef)}>Home</li>
          <li onClick={() => executeScroll(aboutRef)}>About</li>
          <li onClick={() => executeScroll(projectsRef)}>Projects</li>
          <li onClick={() => executeScroll(contactRef)}>Contact</li>
        </ul>

        <button
          className={styles.header_container_button}
          onClick={() => setShowNav(!showNav)}
        >
          <IoMenuSharp />
        </button>
      </div>

      {showNav && (
        <div
          style={{ zIndex: 10 }}
          className={`${styles.mobile_nav} ${showNav ? styles.open : ""}`}
        >
          <button className={styles.close} onClick={() => setShowNav(!showNav)}>
            x
          </button>
          <ul>
            <li onClick={() => executeScroll(myRef)}>Home</li>
            <li onClick={() => executeScroll(aboutRef)}>About</li>
            <li onClick={() => executeScroll(projectsRef)}>Projects</li>
            <li onClick={() => executeScroll(contactRef)}>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
