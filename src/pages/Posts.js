import React, {Component} from 'react';
import { Card, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    posts: json
                })
            })
    }

    render() {
        let { isLoaded, posts } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                
                <Container>
                    <div className='jumbotron'>
                        <h1>Test</h1>
                    </div>
                    <div>
                        <ul>
                            { posts.map(post => (
                                <li key={post.id}>
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
               
            )
        }
    }
}

export default Posts;