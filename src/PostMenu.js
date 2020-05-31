import React from 'react';
import { Route, Link } from 'react-router-dom';


const PostMenuLink = ({ id, to, label }) => (
  <Route path={`/blog/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const PostMenu = ({ posts }) => (
  <navigation className="posts-menu">
    {
      posts.map(post =>
        <PostMenuLink key={post.id} id={post.id} to={`/blog/${post.id}`} label={post.title} />,
      )
    }
  </navigation>
);

export default PostMenu;