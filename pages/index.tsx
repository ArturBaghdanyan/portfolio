import { useState } from "react";
import HomePage from "../components/HomePage/homePage";
import bgImage from '../public/backgroundImage.jpg';

export default function Home() {
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

  const divStyle = {
    backgroundImage: `url(${bgImage.src})`,
    width: "100vw",
    height: "400px",
    backgroundColor: "#cccccc"
  };

  return (
    <div className="flex flex-col h-screen">
      <div 
        className="bg-center bg-no-repeat bg-fixed bg-cover px-10" 
        style={divStyle}>
        <HomePage isHeaderFixed={isHeaderFixed} />
      </div>
    </div>
  )
}
