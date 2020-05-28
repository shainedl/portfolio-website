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
                title="Mutant Teenage Arachnid Revolution"
                category="Virtual Reality"
            />
            
            <Thumbnail
                video="GyMDabpqGh0"
                title="LumiVote"
                category="Website Development"
            />

            <Thumbnail
                video="ql0CleL4kDs"
                title="Disco Party in MakerLAB"
                category="Virtual Reality"
            />

            <Thumbnail
                video="X_eonFkd9ug"
                title="Freeze Pitch"
                category="Presentation"
            />

        </div>

    </div>
  )
}
 
export default Projects;