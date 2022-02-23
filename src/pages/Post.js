import { useParams, Link, Redire } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';


const Post = () => {
    const { id } = useParams();
    const [post, setPost] = React.useState(null);
    const mounted = useRef(false);
    const { nextPost, previousPost} = 0;

    useEffect(() => {
        mounted.current = true;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
                mounted.current = false;
            })
    }, [])

    return (
        <Container>
            <div className='jumbotronPost'>
                {post && <p style={{fontSize: '70px'}}> {post.title}</p>}
            </div>
            <hr/>
            <div>
                {post && <p> {post.body}</p>}
            </div>
            <hr/>
            <div>
                {post && <Link to={`/posts/${post.id - 1}` } style={{float: 'left'}}><ArrowLeft /> Previous article </Link>}
                {post && <Link to={`/posts/${post.id + 1}`} style={{float: 'right'}}>Next article <ArrowRight /></Link>}
            </div>
            <div style={{backgroundColor: '#F7F7F8'}}>
            </div>
        </Container>
    )
}

export default Post;