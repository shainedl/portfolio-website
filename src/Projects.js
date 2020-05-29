import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import { PDFDownloadLink, Document, Page } from 'react-pdf'
import './App.css';
 
function Projects(props) {

  return (
    <div>
      <h1>PROJECTS</h1>
        <div className="thumbnails">
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

        </div>

    </div>
  )
}
 
export default Projects;