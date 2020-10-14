import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './homepage.css';

class HomePage extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

    }
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col lg="6">
                        <Card>
                            <Card.Body>
                                <Card.Title className="styled-text">Sign In</Card.Title>
                                <Form>
                                    <Form.Group controlId="basicEmail">
                                        <Form.Label className="styled-text">Email Address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group controlId="basicPassword">
                                        <Form.Label className="styled-text">Password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                    <Button className="styled-text" variant="outline-dark" type="submit" onClick={this.handleSubmit} block>Sign in</Button>
                                    <p className="styled-text d-flex justify-content-center">or</p>
                                    <Link to="/createaccount"><Button className="styled-text" variant="outline-dark" block>Create Account</Button></Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default HomePage;