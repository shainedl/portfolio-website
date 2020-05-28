import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import Home from './Home';
import Projects from './Projects'; 
import Blog from './Blog'; 
import About from './About'; 
import PostPage from './PostPage';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import './App.css';

function App() {
  return (

    <BrowserRouter>

      <div className="App">
        <StickyHeader
          header={
            <div className="Header_root">
            <h1 className="Header_title">SHAINE LEIBOWITZ</h1>
    
            <ul className="navigation">
            <li className="Header_link"><Link to="/">HOME</Link></li>
              <li className="Header_link"><Link to="/projects">PROJECTS</Link></li>
              <li className="Header_link"><Link to="/blog">BLOG</Link></li>
              <li className="Header_link"><Link to="/about">ABOUT</Link></li>
            </ul>
          </div>
          }
          backgroundColor={'#8860d0'}
        >

        </StickyHeader>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog/:id" component={PostPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </Switch>
        



      </div>
    </BrowserRouter>

    
  );
}

export default App;
