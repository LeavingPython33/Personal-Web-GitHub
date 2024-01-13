import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SkillStyle.css"
import Ukulele from "./images/Ukulele.png";
import Robot from "./images/Robot.png";


export default function Projects() {
    return (
    <div className="skillBackground">
        <h1 className='subject text-center mb-5'>Projects</h1>
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Card className="cardTransform cardShadow" bg='dark' key='dark' text='white' style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img variant="top" style={{height: '16rem' }} src={Ukulele} />
                        <Card.Body>
                            <Card.Title className='title'>Custom Ukulele <br/> <span className='place'>Engineering Seminar</span></Card.Title>
                            <Card.Text className='cardText'>
                                A DIY Ukulele that can be built using a CNC, 3D-Printer, and glue.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="cardTransform cardShadow" bg='dark' key='dark' text='white' style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img variant="top" style={{height: '16rem' }} src={Robot} />
                        <Card.Body>
                            <Card.Title className='title'>Robot<br/> <span className='place'>FRC 2023</span></Card.Title>
                            <Card.Text className='cardText'>
                                A tank drive robot that is able to manipulate cones and cubes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="cardTransform cardShadow" bg='dark' key='dark' text='white' style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img variant="top" style={{height: '16rem' }} src="https://codehs.com/uploads/0c23b523b3502b7ff35d5580c0c3b08b" />
                        <Card.Body>
                            <Card.Title className='title'>Rock Detective <br/> <span className='place'>--------</span></Card.Title>
                            <Card.Text className='cardText'>
                                A short choose your own story adventure website game using only HTML and CSS.
                            </Card.Text>
                            <Card.Link href='https://leavingpython33.itch.io/rock-detective' target='blank_'>
                                Game Link
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="cardTransform cardShadow" bg='dark' key='dark' text='white' style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img variant="top" style={{height: '16rem' }}  src="https://img.itch.zone/aW1nLzEyNDQ3NTU3LnBuZw==/315x250%23c/gXXdSW.png" />
                        <Card.Body>
                            <Card.Title className='title'>RoboRepair <br/> <span className='place'>Mini Jam 134</span></Card.Title>
                            <Card.Text className='cardText'>
                                A short game where you continuously need to repair yourself.
                            </Card.Text>
                            <Card.Link href='https://leavingpython33.itch.io/robo-repair' target='blank_'>
                                Game Link
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
