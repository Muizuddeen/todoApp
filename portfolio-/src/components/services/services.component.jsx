import React from 'react';
import Title from "../title/title.component";
import { FaCog, FaCalendarCheck, FaLaptopCode }
 from "react-icons/fa";
import './services.styles.scss';

class Services extends React.Component{
    state ={
    services:[
   {  icon:<FaCog/>,
     title:"Hardwork",
     info: "I have built massive work on react front-end."
   },
   {  icon:<FaCalendarCheck/>,
     title:"Punctual",
     info: "I spend most of my time on web Development."
   },
   {  icon:<FaLaptopCode/>,
     title:"Development",
     info: "working on back-end technologies."
   }
   ]
 };
 render() {
     return (
       <section className="services">
       <Title title = "services"/>

       <div className ="services-center">
       {this.state.services.map((item, index) => {
       return (
       <article key = {index} className ="service">
       <span>{item.icon}</span>
       <h4>{item.title}</h4>
       <p>{item.info}</p>
       </article>
     );
       })}

       </div>
       </section>
     );
   }
 };
export default Services;
