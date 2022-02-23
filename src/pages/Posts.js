import React, {Component} from 'react';
import { Card, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false,
            countPosts: 0
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    posts: json,
                    countPosts: json.length
                })
            })
    }

    render() {
        let { isLoaded, posts, countPosts } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                
                <Container>
                    <div className='jumbotron'>
                        <p style={{fontSize: '70px'}}>Posts found: {countPosts} </p>
                    </div>
                    <div>
                        <Row>
                            
                                {posts.map(post => (
                                    <Col md={4}>
                                        <Card key={post.id}>
                                            <Card.Body>
                                                <Card.Title>
                                                    {post.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    {post.body}
                                                </Card.Text>
                                                <Card.Link href="#">Card Link</Card.Link>
                                                <Card.Link href="#">Another Link</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))};
                        </Row>
                    </div>
                </Container>
               
            )
        }
    }
}

export default Posts;