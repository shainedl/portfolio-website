import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
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
              <li className="Header_link"><Link to="/">PROJECTS</Link></li>
              <li className="Header_link"><Link to="/blog">BLOG</Link></li>
              <li className="Header_link"><Link to="/about">ABOUT</Link></li>
            </ul>
          </div>
          }
          backgroundColor={'white'}
        >

        </StickyHeader>

        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/blog/:id" component={PostPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </Switch>
        



      </div>
    </BrowserRouter>

    
  );
}

export default App;

/*
      <h1>SHAINE LEIBOWITZ</h1>
      <header className="navigation">
          <div>
            <Link to="/">PROJECTS</Link>
          </div>
          <div>
            <Link to="/blog">BLOG</Link>
          </div>
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
        </header>
        */