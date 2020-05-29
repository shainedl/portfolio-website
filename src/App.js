/* Helpful for developing in React 
https://www.framer.com/blog/posts/react-portfolio/ */

import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import Home from './Home';
import Projects from './Projects'; 
import Blog from './Blog'; 
import PostPage from './PostPage';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import './App.css';

/* https://zamarrowski.github.io/react-ionicons/ */
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';

function App() {
  return (

    <BrowserRouter>

      <div className="App">
        <StickyHeader
          header={
            <div className="Header_root">
            <h1 className="Header_title">SHAINE LEIBOWITZ</h1>
    
            <ul className="navigation">
            <li className="Header_link"><Link to="/ShaineLeibowitz">HOME</Link></li>
              <li className="Header_link"><Link to="/ShaineLeibowitz/projects">PROJECTS</Link></li>
              <li className="Header_link"><Link to="/ShaineLeibowitz/blog">BLOG</Link></li>
              <li className="logo_link">ShaineDL@gmail.com</li>
              <li className="logo_link"><LogoLinkedin onClick={() => window.location.href = 'https://www.linkedin.com/in/shaine-leibowitz/'} fontSize="2vw" color="#f8f8ff"/></li>
              <li className="logo_link"><LogoGithub onClick={() => window.location.href = 'https://github.com/shainedl'} fontSize="2vw" color="#f8f8ff"/></li>
              
              </ul>
          </div>
          }
          backgroundColor={'#1a1a1d'}
        >

        </StickyHeader>

        <Switch>
          <Route exact path="/ShaineLeibowitz" component={Home} />
          <Route path="/ShaineLeibowitz/projects" component={Projects} />
          <Route path="/ShaineLeibowitz/blog/:id" component={PostPage} />
          <Route path="/ShaineLeibowitz/blog" component={Blog} />
        </Switch>
        



      </div>
    </BrowserRouter>

    
  );
}

export default App;
