import React from 'react';
import posts from './data/posts';
import Content from './Content';

function PostPage(props){

    const id = props.match.params.id;
    const post = posts.filter((post) => post.id === id)[0];

    return (
        <div>
            <div className="post">
                <div>
                    <div className="opener">
                        <div className="post-title-page">{post.title}</div>
                        <div className="post-description-page">{post.description}</div>
                        <div className="post-date-page">{post.date}</div> 
                    </div>
                    <section className="answers">
                        <u1>{
                            post.sections.map((section, i) => <Content key={i} {...section}/>)
                        }</u1>
                    </section>
                </div>

            </div>
        </div>
    );

}

export default PostPage;
