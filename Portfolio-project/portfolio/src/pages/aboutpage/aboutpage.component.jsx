import React from 'react';
import Title from "../../components/title/title.component";
import './aboutpage.styles.scss';
const AboutPage = () =>(
  <div className="about">
   <Title title = "About"/>
   <article className="about-text">
 <span className ="text">Interactive Front-end developer</span>
 <p className="sub-text">
 Talented, enthusiastic and technically strong individual with
 over 2 years of front-end web development and technical experience.
 I have real passion for coding, technology
 and software and possess proven ability of
 balancing multiple work streams within a fast paced,
 demanding environment. With excellent <span className ="text">HTML, CSS (SASS),
  JavaScript and React</span> development skills,
 currently I’m seeking to continue my career with a vibrant company
 that will allow me to be part of a highly collaborative team, develop my
 technical skills and work on projects for challenging client requirements.
 For more information on my work, pre-existing skills and background experience
  please review my Github profile.
 </p>

  </article>
  </div>
);
export default AboutPage;
