// Sign up form with username email and password fields

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, Container, Row, Col, Card, CardHeader, Jumbotron} from 'reactstrap';
import { InputGroupAddon, InputGroupText } from 'reactstrap';
class AppSignup extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="mt-5">
                <Jumbotron>
                <Container>
                <Row>
                <Col sm="8">
                    <Card>
                        <CardHeader className="mb-3" tag="h4">
                            <Row>
                            <Col sm='10'>
                                Sign Up
                            </Col>
                            <Col style={{textAlign:'right'}}>🖊️</Col>
                            </Row>
                        </CardHeader>
                        <Container>
                            <Form>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" name="username" id="username" placeholder="username" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Password" />
                                </FormGroup>
                                <FormGroup class="mb-3 mt-4">
                                    <Button>Submit</Button>
                                </FormGroup>
                                <p>Already Have an account? Click <a href='/login'>here</a> to login.</p>
                            </Form>
                        </Container>
                    </Card>
                </Col>
                </Row>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default AppSignup;
