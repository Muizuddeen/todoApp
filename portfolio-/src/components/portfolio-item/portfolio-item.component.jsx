import React from 'react';
import { withRouter } from 'react-router-dom';
// import CustomButton from '../custom-button/custom-button.component';
import { FaGithubSquare } from "react-icons/fa";
import './portfolio-item.styles.scss';

const PortfolioItem = ({ title, imageUrl, history, linkUrl, gitUrl, match }) => (
  <div className = 'menu-item'>
   <a className = 'link' href ={linkUrl} target ='_blank' rel ='noopener noreferrer'>
    <img
     className = 'background-image'
     style = {{ backgroundImage: `url(${imageUrl})` }}/>
  </a>
  <div className='content'>
  <h1 className="title">{title.toUpperCase()}</h1>
  <a href ={gitUrl}
   target ='_blank' rel ='noopener noreferrer'>
    <FaGithubSquare className='icon'/></a>
    </div>




    </div>


);

export default withRouter(PortfolioItem);
