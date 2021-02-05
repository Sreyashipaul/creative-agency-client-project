import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import frame from '../../../Images/logos/Frame.png';
import NavBar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderContent.css';
const HeaderContent = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
             <div style={{height: '600px'}} className="d-flex align-items-center">
            <Container> 
                <Row > 
                    <Col className="header-content" md={4}>
                        <h1>Let’s Grow Your <br/>
                            Brand To The <br/>
                            Next Level
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <a href="/#contact">
                        <button className="btn btn-brand text-white text-uppercase mt-3">hire us</button>
                         </a>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <img className="img-fluid" src={frame} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default HeaderContent;