import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {FaLinkedin, FaTwitterSquare, FaFacebookSquare, FaGithubSquare} from "react-icons/fa";
import './footer.styles.scss';
class Footer extends React.Component{

  state ={
    footer :[
      {
        id:1,
        icon:<FaFacebookSquare/>
      },
      {
        id:2,
        icon:<FaTwitterSquare/>
      },
      {
        id:3,
        icon:<FaLinkedin/>
      },
      {
        id:4,
        icon:<FaGithubSquare/>
      }
    ]
  };
  render(){
    return(
      <section className="footer">
      <div className="logo-container">
     <Logo className='logo' />
     </div>

      <div className ="footer-icons">
      {this.state.footer.map((item, id) => {
      return (
      <div key = {id} className ="icon">
      <span>{item.icon}</span>
      </div>

    );
      })}

      </div>
      <p className="footer-copy">
				&copy; 2020 Muizuddeen
			</p>
      </section>
    );
  }
};
export default Footer;
