import React from "react";
import { Component } from "react";

import { ButtonGroup, Button, Row, Col, Container } from 'react-bootstrap'
import App from "../../App";
import Profil from "../Profil/Profil";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            gameCode : '',
            pseudo: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        alert(this.state.pseudo);
    }

    render() {
        return (
            <Container fluid>
                <Col style={{
                    border: '2px solid moccasin',
                    borderRadius: '10px',
                    backgroundColor: 'palegoldenrod'
                }}>
                    <Row>
                        <Button
                            variant="outline-info"
                            size="lg"
                            onClick={() => this.props.OnClick("crgame")}
                        >
                        Create Game
                        </Button>
                        <br />
                    </Row>
                    <Col>
                        <Row>
                            <form onSubmit={this.handleSubmit}>
                            
                                <Row>
                                    <h4>Join with a code</h4>
                                    <br/>
                                </Row>
                            
                                <input type="text" value={this.state.gameCode} onChange={text => this.setState({ gameCode: text.target.value })} />
                            
                                <input type="submit" value="Enter Game" />
                            </form>
                        </Row>
                    </Col>
                    <Row>
                        {/* Ici un composant réactif qui changera selon ce qu'on touche (Genre le home c'est la liste des games, puis lorsque l'on naviguera sur la barre "menu", cela changera ce qu'il y a ici.) 
                        En attendant je hardcode le listing des game disponible*/}
                        <Container>
                            <Col>
                                <Row>
                                    <h4>Find games</h4>
                                    <br />
                                </Row>
                                <Row>
                                    <Button variant="success">Joinable</Button><br />__
                                    <p>  Victor's party</p>
                                    <p>[3/4]</p>
                                </Row>
                                <br />
                                <Row>
                                    <Button variant="danger" disabled>Full</Button><br />__
                                    <p>  Gamepass Challenge</p>
                                    <p>[4/4]</p>
                                </Row>
                            </Col>
                        </Container>
                    </Row>
                </Col>
            </Container>
        )

    }
}
export default Home