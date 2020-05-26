import React from 'react';
// Import the BrowserRouter, Route and Link components
import { HashRouter, Route, Link, Switch } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Blog from './Blog.js'; 
import About from './About.js'; 
import './App.css';

function App() {
  return (
    <HashRouter>

    <div className="App">
      <div className="navigation">
        <div>
          <Link to="/" className="item">PROJECTS</Link>
        </div>
        <div>
          <Link to="/blog" className="item">BLOG</Link>
        </div>
        <div>
          <Link to="/about" className="item">ABOUT</Link>
        </div>
      </div>
      

      <Switch>
        <Route exact path="/" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </Switch>
        

  </div>
  </HashRouter>
  );
}

export default App;
