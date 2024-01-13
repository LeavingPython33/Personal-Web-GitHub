import React from 'react';
import Welcome from './Welcome';
import Skills from './Skills';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import { animated, useSpring } from '@react-spring/web'
import './PageStyle.css'
import Projects from './Projects';
import Footer from './Footer';
import { useRef, useState, useEffect } from 'react';
import NavBar from './NavBar';
import './NavStyle.css'

function ParallaxVersion() {
  const ref = useRef();

  //[nameSize, key]
  const [size, setSize] = useState([
    "l",
    -1
  ]);
  
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  
  if(size[1]== -1){
    if(windowSize[0] < 768){
      setSize(["xs", 0])
    }
    else if(windowSize[0] < 991){
      setSize(["s", 1])
    }
    else if(windowSize[0] < 1280){
      setSize(["m", 2])
    }
    else{
      setSize(["l", 3])
    }
  }

  //xs < 768 s < 1024 m < 1280 l < 1440
  const screenSetting = {
    "xs": {
      pages: 6.4,
      page1: {offset: 0, factor: 1.6}, //D
      page2: {offset: 1.6}, //D
      page3: {offset: 3},
      page4: {offset: 5.7},
      parallax1: {offset: 0.6}, //D
      parallax2: {offset: 6},
      parallax3: {offset: 4.7}
    },
    "s": {
      pages: 6.5,
      page1: {offset: 0, factor: 1.8}, //D
      page2: {offset: 1.7}, //D
      page3: {offset: 2.9},
      page4: {offset: 4.3},
      parallax1: {offset: 0.6}, //D
      parallax2: {offset: 6},
      parallax3: {offset: 3.3}
    },
    "m": {
      pages: 4.5,
      page1: {offset: 0, factor: 1.3}, //D
      page2: {offset: 1}, //D
      page3: {offset: 2.3},
      page4: {offset: 3.9},
      parallax1: {offset: 0.1}, //D
      parallax2: {offset: 1.5},
      parallax3: {offset: 2.9}
    },
    "l": {
      pages: 3.6,
      page1: {offset: 0, factor: 1.3}, //D
      page2: {offset: 1}, //D
      page3: {offset: 2},
      page4: {offset: 3},
      parallax1: {offset: 0.1}, //D
      parallax2: {offset: 1},
      parallax3: {offset: 2.1}
    }
  }

  //Get Window Size
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  //Reacts when the window size changes
  useEffect(() => {
    if(windowSize[0] < 768){
      setSize(["xs", 0])
    }
    else if(windowSize[0] < 991){
      setSize(["s", 1])
    }
    else if(windowSize[0] < 1280){
      setSize(["m", 2])
    }
    else{
      setSize(["l", 3])
    }
  }, [windowSize[0]]);

  return (
    <div className='b1'>
      <Parallax ref={ref} key={size[1]} pages={screenSetting[size[0]].pages} className="b1" >

        <ParallaxLayer speed={0.2} offset={0} factor={screenSetting[size[0]].page1.factor} style={{backgroundColor: "#211e20"}}>
          <Welcome className=""></Welcome>
        </ParallaxLayer>

        <ParallaxLayer className="bypass" speed={0.4} offset={screenSetting[size[0]].parallax1.offset} style={{backgroundImage: "" }}>
          <div className="animation_layer parallax layer1"></div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.4} offset={screenSetting[size[0]].page2.offset} style={{backgroundColor: '#e9efec' }}>
          <Skills></Skills>
        </ParallaxLayer>

        
        <ParallaxLayer speed={0.4} offset={screenSetting[size[0]].page3.offset} style={{backgroundColor: '#e9efec' }}>
          <Projects></Projects>
        </ParallaxLayer>

        <ParallaxLayer speed={0.4} factor={5} offset={screenSetting[size[0]].page4.offset} style={{backgroundColor: '#212529' }}>
          <Footer></Footer>
        </ParallaxLayer>

        <ParallaxLayer className="bypass" speed={0.4} offset={screenSetting[size[0]].parallax2.offset} style={{backgroundImage: "" }}>
          <div className="animation_layer parallax layer4"></div>
        </ParallaxLayer>

        <ParallaxLayer className="bypass" speed={0.4} offset={screenSetting[size[0]].parallax3.offset} style={{backgroundImage: "" }}>
          <div className="animation_layer parallax layer5"></div>
        </ParallaxLayer>

        <ParallaxLayer className="bypass" sticky={{start: 0, end: screenSetting[size[0]].pages}}>
          <ul className='navParent'>
              <li className='navChildren' onClick={()=> ref.current.scrollTo(0)}>
                  Home
              </li>
              <li className='navChildren' onClick={()=> ref.current.scrollTo(screenSetting[size[0]].page2.offset-0.1)}>
                  Skills
              </li>
              <li className='navChildren'onClick={()=> ref.current.scrollTo(screenSetting[size[0]].page3.offset-0.1)}>
                  Projects
              </li>
              <li className='navChildren'onClick={()=> ref.current.scrollTo(screenSetting[size[0]].page4.offset)}>
                  Contacts
              </li>
          </ul>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default ParallaxVersion;
