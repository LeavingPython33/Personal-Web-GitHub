import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import { animated, useSpring } from '@react-spring/web'
import './components/PageStyle.css'
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParallaxVersion from './components/ParallaxVersion';

function App() {

  return (
    <ParallaxVersion></ParallaxVersion>
  );
}

export default App;
