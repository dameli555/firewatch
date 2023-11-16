import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import Navbar from "./NavBar";
import TextBlock from "./TextBlock";

function App() {
  return (
    <>
      <div>
        <Parallax pages={2} style={{ top: "0", left: "0" }} className="animate">
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallex" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallex" id="mountains"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.1}>
            <div className="animation_layer parallex" id="logoland"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallex" id="jungle1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallex" id="jungle2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallex" id="jungle3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div className="animation_layer parallex" id="jungle4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="animation_layer parallex" id="mamomountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallex" id="jungle5"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <TextBlock />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
