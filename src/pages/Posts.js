import React, {Component} from 'react';
import { Card, Button, Container, Row, Col, Jumbotron, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                        <Form>
                            <Row className="mb-3">
                                
                                <Col>
                                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" placeholder="Search..." />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                        <Form.Select aria-label="Default select example">
                                            <option>Filter by author name</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    
                    <div>
                        <Row xs={1} md={3} className="g-4">
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
                                            {/* <Card.Link href="#">Read more</Card.Link> */}
                                            <Link to={`/posts/${post.id}`}>Read more</Link>
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