import React from 'react';
import defaultImg from "../../assets/ryse-bg.png";
import img from '../../assets/hero-img.svg';
import CustomButton from '../custom-button/custom-button.component';
import './hero.styles.scss';
const Hero = () =>(
  <div className ="hero">
   <div className="container">
   <img
    className = 'background-image'
    style = {{ backgroundImage: `url(${defaultImg})` }} />
     <div className="introduction">
     <div className="intro-text">
      <h1>Muizuddeen</h1>
      <p>Interactive Front-end Developer</p>
     </div>
     <div className="buttons">
     <a href ='https://github.com/Muizuddeen' target ='_blank'
      rel ='noopener noreferrer'><CustomButton>Github</CustomButton></a>
     <CustomButton invert>Linkedin</CustomButton>
     </div>
     </div>

     <div className="cover">
       <img src={img} alt="img"/>
     </div>

   </div>
</div>
);
export default Hero;
