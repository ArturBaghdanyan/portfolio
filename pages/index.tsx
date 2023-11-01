import Header from "./HomePage/header";
import bgImage from '../public/backgroundImage.jpg';

export default function Home() {  

  const divStyle = {
    backgroundImage: `url(${bgImage.src})`,
    width: "100vw",
    height: "400px",
    backgroundColor: "#cccccc"
  };

  return (
    <div className="flex flex-col h-screen">
      <div 
        className="bg-center bg-no-repeat bg-fixed bg-cover px-6" 
        style={divStyle}>
        <Header />
      </div>
    </div>
  )
}
