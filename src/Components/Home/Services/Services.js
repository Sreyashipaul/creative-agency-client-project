import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div>
             <div className="mb-5 provid-container">
            <Container>
                <h1 className="text-center brand-text">Provide awesome <span style={{color: '#7AB259'}}>services</span></h1>
                 <Row>
                    { 
                      loading ? <div style={{width: '100%'}} className="d-flex algin-items-center justify-content-center">
                      
                     </div> :  services.map( service =>  <Col key={service._id} md={4} sm={6} xs={12}> 
                            <div onClick={()=>handleServicesclick(service._id)} className="proivde-card text-center"> 
                                <img className="img-fluid" src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                         </Col>)
                    }
                 </Row>
            </Container>
        </div>
        </div>
    );
};

export default Services;