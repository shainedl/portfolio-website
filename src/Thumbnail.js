import React from 'react'; // Import the Component component from React
import ReactPlayer from 'react-player'
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
        <div className="project-video">
          <ReactPlayer url={props.video} alt="Project Video"/>
        </div>
        <div className="project-category">{props.category}</div>
        <div className="project-title">{props.title}</div>
    </div>
  );
}
 
export default Thumbnail;