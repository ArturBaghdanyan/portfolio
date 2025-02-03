import style from "./styles.module.scss";

const About = () => {
  return (
    <div className={`${style.about} container-spacing`}>
      <h2 className="title">about me</h2>
      <div className={style.texture}>
        <p>
          I&apos;m a passionate&nbsp;
          <b style={{ color: "white" }}>Front-End developer</b>&nbsp; with a
          focus on creating visually appealing and user-friendly websites.
        </p>

        <p>
          During this time, I&apos;ve had the privilege of working with two
          different companies, where I&apos;ve honed my skills and contributed
          to various web projects. I&apos;m passionate about creating intuitive
          and visually appealing user interfaces that enhance the user
          experience. I&apos;m constantly eager to learn and grow in the
          ever-evolving field of front-end development.
        </p>
        <p>
          <b style={{ color: "white" }}>Learning</b>&nbsp; and self-improvement
          are fundamental to my journey as a front-end developer. Each day, I
          enthusiastically embrace the opportunity to expand my knowledge and
          expertise. Whether it is exploring the latest web technologies, diving
          into cutting-edge frameworks, or delving into best practices for
          responsive design and accessibility, I&apos;m committed to staying at
          the forefront of my field.
        </p>
        <p>
          Outside of the world of web development, I have a diverse set of
          interests that keep me inspired and balanced. I&apos;m an avid reader,
          always with a&nbsp;
          <b style={{ color: "white" }}>book</b>&nbsp; in hand, and I love
          exploring new worlds through literature.
          <b style={{ color: "white" }}>Sports and football</b>&nbsp; are a
          significant part of my life, not just as a spectator, but also as a
          way to stay active and competitive.
        </p>
      </div>
    </div>
  );
};
export default About;
