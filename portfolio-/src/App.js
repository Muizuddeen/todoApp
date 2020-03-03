import React from 'react';
import { Switch,  Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ProjectPage from './pages/projectpage/projectpage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
     <Header/>

    <Switch>
    <Route  exact path = '/' component ={HomePage}/>
    <Route path = '/projects' component ={ProjectPage}/>
     <Route path = '/about' component ={AboutPage}/>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
