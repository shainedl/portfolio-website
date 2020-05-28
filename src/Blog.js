import React from "react";
import PostPreview from './PostPreview';
import posts from './data/posts';

function Blog(props) {

  return (
    <div>
      <h1>BLOG</h1>
      
        <div className="post-selector">
          {posts.map(postData => <PostPreview key={postData.id} {...postData} />)}
        </div>
    </div>
  )
}
 
export default Blog;
