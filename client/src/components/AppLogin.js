// Renders a basic form with email and password fields

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import { Card, CardHeader, Jumbotron} from 'reactstrap';

class AppLogin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div class="mt-5">
                <Jumbotron>
                <Container>
                <Row>
                <Col sm="8">
                    <Card>
                        <CardHeader className="mb-3" tag="h4">
                            <Row>
                                <Col sm="10">
                                    Login
                                </Col>
                                <Col style={{textAlign:'right'}}>
                                🔐
                                </Col>
                            </Row>
                        </CardHeader>
                        <Container>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                </FormGroup>
                                <FormGroup class="mb-3 mt-4">
                                    <Button>Submit</Button>
                                </FormGroup>
                            </Form>
                            <p>Don't have an Account? Click <a href="/signup">here</a> to sign up.</p>
                        </Container>
                    </Card>
                </Col>
                </Row>
                </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default AppLogin;