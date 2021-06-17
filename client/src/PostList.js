import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {

    const [list, setList] = useState({});

    const getListOfPosts = async () => {
        await axios.get('http://localhost:4000/posts').then(myPosts => {
            console.log(myPosts);
            setList(myPosts.data);
        }).catch(error => {
            console.log(error);
        });
    };
    useEffect(() => {
        getListOfPosts();
    }, []);

    const renderedPosts = Object.values(list).map(post => {
        return (<div key={post.id} className="card" style={{ width: '30%', marginBottom: '20px' }}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id} />
            </div>
        </div>);
    });
    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>

};