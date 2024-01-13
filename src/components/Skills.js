import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {animated} from '@react-spring/web';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SkillStyle.css"


export default function Skills() {
    const technologies = ["GDScript", "Java", "Python", "JavaScript", "HTML", "CSS", "React"];
    const listTechnologies = technologies.map((technologies) => <li>{technologies}</li>);

    const programs = ["Fusion360", "Cura", "Godot", "Aseprite", "Blender"];
    const listPrograms = programs.map((programs) => <li>{programs}</li>);

    const hands = ["3D-Printers", "CNCs", "Drills", "Saws", "PVC welding" ];
    const listHands = hands.map((hands) => <li>{hands}</li>)

    return (
        <div className="skillBackground">
            <h1 className='subject text-center'>Skills</h1>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <div className="customCard cardShadow">
                            <h1 className='pt-4 subHeading text-center'>Technologies</h1>
                            <ul className="listText">
                                {listTechnologies}
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="customCard cardShadow">
                            <h1 className='pt-4 subHeading text-center'>Programs</h1>
                            <ul className="listText">
                                {listPrograms}
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="customCard cardShadow">
                             <h1 className='pt-4 subHeading text-center'>Hands-on</h1>
                             <ul className="listText">
                                {listHands}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
