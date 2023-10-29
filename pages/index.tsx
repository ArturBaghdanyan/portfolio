import { useState } from "react";
// import Contact from "./Contact";
import Header from "./HomePage/header";
// import About from "./AboutPage";
import bgImage from '../public/backgroundImage.png';
import WhoAmI from "./Article";
import Contact from "./Contact";
// import ProjectsList from "./Projects";


export default function Home() {
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

  const divStyle = {
    backgroundImage: `url(${bgImage.src})`,
    width: "100vw",
    height: "400px",
    backgroundColor: "#cccccc"
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div 
        className="bg-center bg-no-repeat bg-cover w-full px-6"
        style={divStyle}>
        <Header isHeaderFixed={isHeaderFixed} setIsHeaderFixed={setIsHeaderFixed} />
        <WhoAmI />
      </div>
      <Contact />
      {/* <About />
      <ProjectsList />
      <Contact /> */}
    </div>
  )
}
