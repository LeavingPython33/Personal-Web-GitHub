import React from 'react'
import './NavStyle.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

export default function NavBar(props) {
  return (
    <div>
        <ul className='navParent'>
            <li className='navChildren' onClick={()=> props.ref.current.scrollTo(1)}>
                Home
            </li>
            <li className='navChildren'>
                Skills
            </li>
            <li className='navChildren'>
                Projects
            </li>
        </ul>
    </div>
  )
}
