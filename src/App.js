/* Helpful for developing in React 
https://www.framer.com/blog/posts/react-portfolio/ */

import React from 'react';
import { Route, Link, Switch, HashRouter } from 'react-router-dom'; 
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

    <HashRouter>

      <div className="App">
        <StickyHeader
          header={
            <div className="Header_root">
            <h1 className="Header_title">SHAINE LEIBOWITZ</h1>
    
            <ul className="navigation">
            <li className="Header_link"><Link to="/">HOME</Link></li>
              <li className="Header_link"><Link to="/projects">PROJECTS</Link></li>
              <li className="Header_link"><Link to="/blog">BLOG</Link></li>
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
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog/:id" component={PostPage} />
          <Route path="/blog" component={Blog} />
        </Switch>
        



      </div>
    </HashRouter>

    
  );
}

export default App;
