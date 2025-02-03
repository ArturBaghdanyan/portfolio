import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import styles from "./styles.module.scss";

const urls = {
  gmail: "mailto:arturbaghdanyan20@gmail.com",
  facebook: "https://www.facebook.com/A.bagdanyan",
  github: "https://github.com/ArturBaghdanyan",
  linkedin: "https://www.linkedin.com/in/artur-baghdanyan-60088b206",
};

const Contact = () => {
  return (
    <div className={`${styles.contact} container-spacing`}>
      <div className={styles.contact_link}>
        <Link href={urls.gmail} target="_blank">
          <BiLogoGmail width={25} height={25} />
        </Link>
        <Link href={urls.facebook} target="_blank">
          <FaFacebook width={25} height={25} />
        </Link>
        <Link href={urls.github} target="_blank">
          <FaGithub width={25} height={25} />
        </Link>
        <Link href={urls.linkedin} target="_blank">
          <FaLinkedin width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};
export default Contact;
