import React from 'react';
import Hero from '../../components/hero/hero.component';
import Services from '../../components/services/services.component';
import './homepage.styles.scss';
const HomePage = () =>(
  <div className='homepage'>
    <Hero/>
    <Services/>

    </div>
  );

export default HomePage;
