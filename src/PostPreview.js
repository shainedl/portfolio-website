/* Helpul in creating the Blog 
https://github.com/lmammino/judo-heroes-2 */

import React from "react"
import { Link } from 'react-router-dom';
 
function PostPreview(props) {

  return (
    <Link to={`/blog/${props.id}`} style={{ textDecoration: 'none' }} activeStyle={{color: 'red'}}>
        <div className="blog_posts">
            <img src={props.image} alt="Post"/>
            <div className="post-title">{props.title}</div>
            <div className="post-description">{props.description}</div>
            <div className="post-date">{props.date}</div>
        </div>
    </Link>
  );
}
 
export default PostPreview;
