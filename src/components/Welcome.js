import React, {useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faItchIo} from '@fortawesome/free-brands-svg-icons';
import {animated} from '@react-spring/web';
import {useAnimation} from './PopAnimation';
import './WelcomeStyle.css';
import Resume from './images/Resume.pdf'

function Welcome() {
    const box1Style = useAnimation(100);
    const box2Style = useAnimation(200);
    const box3Style = useAnimation(300);
    const box4Style = useAnimation(400);

    return (
        <div className='section'>
            <Container>
                <Row className="topPadding">
                    <Col></Col>
                    <Col>
                        <animated.div className="box flex-end" style={box1Style}>
                        </animated.div>
                        <animated.div style={box3Style}>
                            <Row>
                                <Col className="text-center text-primary">
                                    <a href="https://github.com/LeavingPython33" target="_blank">
                                        <i class="bi bi-github iconTransform"></i>
                                    </a>
                                </Col>
                                <Col className="text-center text-primary">
                                    <a href="https://leavingpython33.itch.io/" target="_blank">
                                        <FontAwesomeIcon icon={faItchIo} className="iconTransform mt-3"/>
                                    </a>
                                </Col>
                                <Col className="text-center text-primary">
                                    <a href="https://www.linkedin.com/in/alfred-tapia-07b1582b7/" target="_blank">
                                        <i class="bi bi-linkedin iconTransform"></i>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center text-primary">
                                    <a href="mailto:alfredtapiaratana@gmail.com">
                                        <i class="bi bi-envelope-fill iconTransform"></i>
                                    </a>
                                </Col>
                                <Col className="text-center text-primary">
                                    <a href="https://www.youtube.com/@python9080/featured" target="_blank">
                                        <i class="bi bi-youtube iconTransform"></i>
                                    </a>
                                </Col>
                                <Col className="text-center text-primary">
                                    <a href="https://www.instagram.com/leavingpython?igsh=aXFhaGdzaDB0aTI4&utm_source=qr" target="_blank">
                                        <i class="bi bi-instagram iconTransform"></i>
                                    </a>
                                </Col>
                            </Row>
                        </animated.div>
                    </Col>
                    <Col md={7}>
                        <animated.div className="wideBox mainText" style={box2Style}>
                            <p>
                                Hi my <strong>name </strong> is <br/> 
                                <span className="name">
                                    Alfred Tapia 
                                </span>
                            </p>
                            <hr></hr>
                            <ul className="list">
                                <li>
                                    From Chicago, IL
                                </li>
                                <li> 
                                    A student at Vanderbilt
                                </li>
                                <li>
                                    Studying CompSci
                                </li>
                            </ul>
                        </animated.div>
                        <animated.div className="text-center resumeBackground" style={box4Style}>
                            <a href={Resume} target='_blank' className="resumeText">
                                <h2>-My Resume-</h2>
                            </a>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Welcome;