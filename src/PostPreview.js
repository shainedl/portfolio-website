import React from "react"
import { Link } from 'react-router-dom';
 
function PostPreview(props) {

  return (
    <Link to={`/blog/${props.id}`}>
        <div className="blog_posts">
            <img src={props.image} alt="Post"/>
            <h2 className="post-title">{props.title}</h2>
            <div className="post-description">{props.description}</div>
            <div className="post-date">{props.date}</div>
        </div>
    </Link>
  );
}
 
export default PostPreview;
