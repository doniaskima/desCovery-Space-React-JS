import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import stars from '../../assets/stars.png';
import moon from '../../assets/moon.png';
import comet from '../../assets/comet.png';
import astronaut from '../../assets/astronaut.png';
import space_ship  from '../../assets/space_ship.png';
 

const Features = () => (
  <div className="scene">
       <img src={stars} class="stars"/>
        <img src={space_ship} class="ship"/>
        <img src={astronaut} class="astronaut"/>
        <img src={comet} class="comet"/>
        <img src={moon} class="moon" /> 
    </div>
      
    

);

export default Features;
