import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Experience from './components/pages/Experience'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import Nav from './components/organisms/Nav'


gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

const App = () => {
  return (
    <div className='bg-white text-primary-900 w-screen'>
      <Nav />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
