import React from 'react';
import YouTube from '@u-wave/react-youtube';
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
        <div className="project-video">
          <YouTube className='player' video={props.video} />
        </div>
        <div className="project-category">{props.category}</div>
        <div className="project-title">{props.title}</div>
    </div>
  );
}
 
export default Thumbnail;