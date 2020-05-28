import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import Projects from './Projects'; 
import Blog from './Blog'; 
import About from './About'; 
import PostPage from './PostPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <div className="navigation">
          <div>
            <Link to="/">PROJECTS</Link>
          </div>
          <div>
            <Link to="/blog">BLOG</Link>
          </div>
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
        </div>

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

/**/