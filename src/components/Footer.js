import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterStyle.css'; 
import Resume from './images/Resume.pdf'
import Rock from './images/Rock.gif'

export default function Footer() {
    return (
        <div>
            <Container className="bg-dark text-white py-5 my-5 border-top">
                <Row className=''>
                    <Col className='pl-5' mb={3}>
                        <h1>Alfred Tapia</h1>
                        <img src={Rock} className='' style={{height: "100px"}}></img>
                    </Col>
                    <Col mb={3}></Col>
                    <Col mb={3}>
                        <h5>Socials</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="https://github.com/LeavingPython33" target="_blank" class="nav-link p-0 footerText">Github</a></li>
                            <li class="nav-item mb-2"><a href="https://leavingpython33.itch.io/" target="_blank" class="nav-link p-0 footerText">Itch.io</a></li>
                            <li class="nav-item mb-2"><a href="#" target="_blank" class="nav-link p-0 footerText">linkedin</a></li>
                            <li class="nav-item mb-2"><a href="https://www.instagram.com/leavingpython?igsh=aXFhaGdzaDB0aTI4&utm_source=qr" target="_blank" class="nav-link p-0 footerText">Instagram</a></li>
                        </ul>
                    </Col>
                    <Col mb={3}>
                        <h5>Contacts</h5>
                        <ul class="nav flex-column text-white">
                            <li class="nav-item mb-2"><a href="mailto:alfredtapiaratana@gmail.com" target="_blank" class="nav-link p-0 footerText">alfredtapiaratana@gmail.com</a></li>
                            <li class="nav-item mb-2"><a href={Resume} target="_blank" class="nav-link p-0 footerText">-Resume-</a></li>
                        </ul>
                    </Col>
                    <Col mb={3}>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
