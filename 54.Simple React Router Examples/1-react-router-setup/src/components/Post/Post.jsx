import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <p><Link to={`/posts/${id}`}><button>Show More</button></Link></p>
        </div>
    );
};

export default Post;