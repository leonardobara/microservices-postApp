import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {

    const [comments, setComments] = useState([]);

    const getListOfCommentsByPostId = async () => {
        await axios.get(`http://localhost:4001/posts/${postId}/comments`).then(myComments => {
            console.log(myComments);
            setComments(myComments.data);
        }).catch(error => {
            console.log(error);
        });
    };
    useEffect(() => {
        getListOfCommentsByPostId();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}> {comment.content} </li>
    });

    return <ul>
        {renderedComments}
    </ul>

};