import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
function Projects(props) {
  return (
    <div>
      <h1>PROJECTS</h1>
        <div className="thumbnails">
            <Thumbnail
                video="https://www.youtube.com/watch?v=njvg-jnGTHc"
                title="Mutant Teenage Arachnid Revolution"
                category="Virtual Reality"
            />
            
            <Thumbnail
                video="https://www.youtube.com/watch?v=GyMDabpqGh0&t=3s"
                title="LumiVote"
                category="Website Development"
            />

            <Thumbnail
                video="https://youtu.be/ql0CleL4kDs?start=129&end=162"
                title="Dancing Bunnies in MakerLAB"
                category="Virtual Reality"
            />

            <Thumbnail
                video="https://www.youtube.com/watch?v=X_eonFkd9ug&feature=youtu.be"
                title="Freeze Pitch"
                category="Presentation"
            />

        </div>

    </div>
  )
}
 
export default Projects;