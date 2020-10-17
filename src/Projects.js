import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import pdfFile from './data/Leibowitz_Final.pdf';
import title_page from './data/story_pages/title_page.png';
import { Link } from 'react-router-dom';
import './App.css';
 
function Projects(props) {

  return (
    <div>
      <h1>PROJECTS</h1>
        <div className="thumbnails">
          
        <div className="project">
          <a href={pdfFile}> 
            <img src='https://daib13.github.io/blogs/20180725_vae_imgs/graphical_model.png' alt="Paper"></img>

          </a>
          <div className="project-category">NATURAL LANGUAGE PROCESSING RESEARCH</div>
          <div className="project-title">POSTERIOR COLLAPSE</div>
          </div>
          

            <Thumbnail
                video="njvg-jnGTHc"
                title="MTAR"
                category="VIRTUAL REALITY"
            />
            
            <Thumbnail
                video="GyMDabpqGh0"
                title="LUMIVOTE"
                category="WEB DEVELOPMENT"
            />

            <Thumbnail
                video="ql0CleL4kDs"
                title="MAKERLAB DISCO PARTY"
                category="VIRTUAL REALITY"
            />

            <Thumbnail
                video="X_eonFkd9ug"
                title="FREEZE PITCH"
                category="PRESENTATION"
            />
        <div>
        <Link to={`/story`} style={{ textDecoration: 'none' }} activeStyle={{color: 'red'}}>
          <img src={title_page} alt="Title"/>
        </Link>
          <div className="project-category">CREATIVE WRITING</div>
          <div className="project-title">A FAIRY GOOD STORY</div>
        </div>
        </div>
    </div>
  )
}
 
export default Projects;