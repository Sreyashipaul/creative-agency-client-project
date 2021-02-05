import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus,faUserPlus,faHdd,faCommentAlt, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import CoustomerReview from '../CoustomerReview/CoustomerReview';
import CountomerServices from '../CoustomerServices/CountomerServices';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceList from '../ServiceList/ServiceList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { UserContext } from '../../../App';
import logo from '../../../Images/logos/logo.png';
import AddServices from '../AddServices/AddServices';
import OrderForm from '../OrderForm/OrderForm';
const Dashboard = () => {
    const {loggedInUser,setLoggedInuser} = useContext(UserContext);
    //Show side bar state
    const [show,setShow] = useState(null);
    const [adminShow,setAdminShow] = useState(null);

    //Admin email find state
    const [adminEmail,setAdminEmail] = useState(null);

    //Load admin email
    useEffect(()=>{
        fetch('https://damp-cliffs-08620.herokuapp.com/findAdmin?email=' + loggedInUser.email)
        .then( res => res.json())
        .then( data => {
            if(data.length){
                setAdminEmail(true);
            }else{
                setAdminEmail(false);
            }
        })
    },[])
    
    return (
        <div>
             <Container fluid> 
                <Row> 
                
                    <Col md={2}>
                        <div  className="side-bar"> 
                            <div  className="logo mt-2 mb-5"> 
                                <Link to="/"> 
                                <img style={{height: '47px' ,width: '150px'}} className="img-fluid" src={logo} alt=""/>
                                </Link>
                            </div>
                          
                         { adminEmail === true  && <ul> 
                                <li style={adminShow === null ? {color: '#009444'} : {color: '#000000'}}  onClick={()=>setAdminShow(null)} >
                                <faFontAwesome className="mr-2" icon={faHdd} />
                                    Services list
                                </li>
                                <li style={adminShow === true ? {color: '#009444'} : {color: '#000000'}}  onClick={()=>setAdminShow(true)}>
                                <FontAwesomeIcon className="mr-2" icon={faPlus} />
                                    Add Services </li>
                                <li style={adminShow === false ? {color: '#009444'} : {color: '#000000'}}  onClick={()=>setAdminShow(false)}>
                                <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
                                    Make Admin</li>
                         </ul>}
                          { adminEmail === false &&<ul className="mt-5"> 
                          <li style={show === null ? {color: '#009444'} : {color: '#000000'}} onClick={()=>setShow(null)} className="order">
                                <FontAwesomeIcon className="mr-3" icon={faShoppingCart} />
                                    Order
                                    </li>
                                <li style={show === false ? {color: '#009444'} : {color: '#000000'}}  onClick={()=>setShow(false)} className="service">
                                <FontAwesomeIcon className="mr-2" icon={faHdd} />
                                    Service
                                    </li>
                                <li style={show === true ? {color: '#009444'} : {color: '#000000'}}  onClick={()=>setShow(true)} className="review">
                                <FontAwesomeIcon className="mr-2" icon={faCommentAlt} />
                                    Review</li>
                            </ul>}
                        </div>
                    </Col>
                    
                    <Col md={10}> 

                        <div style={{height: '70px'}} className="oder-header bg-white d-flex align-items-center justify-content-between"> 

                         { adminEmail === false ? <p style={{fontSize:'26px',fontWeight: '600'}}> (show === false ? "Services" : "Review")</p> : <p style={{fontSize:'26px',fontWeight: '600'}}>{adminShow === null ? "Service List" : (adminShow === false ? "Make Admin" : "Add Service")}</p>}

                            <div className="login-user d-flex align-items-center"> 
                                <img className="img-fluid mr-3" style={{width: '45px', height: '45px', borderRadius: '50%'}} src={loggedInUser.imgUrl} alt=""/>
                                <p>{loggedInUser.name}</p>
                            </div>
                            <span onClick={()=>setLoggedInuser('')} style={{fontSize:'26px',fontWeight: '600',cursor: 'pointer'}}>Log out</span>
                        </div>

                        <div style={{backgroundColor: '#F4F7FC', height: '100vh',padding: '50px 50px', width: '100%'}} className="order-box"> 
                    
                            { adminEmail === false && <div className="customer-info">
                            {show === null && <OrderForm setShow={setShow}></OrderForm>}
                                {show === false && <CountomerServices> </CountomerServices> }
                                {show === true &&  <CoustomerReview></CoustomerReview>}
                            </div>}
                           { adminEmail === true && <div className="admin-info"> 
                                { adminShow === null &&  <ServiceList></ServiceList>} 
                                {adminShow === false && <MakeAdmin></MakeAdmin>}
                                { adminShow === true && <AddServices setAdminShow={setAdminShow}></AddServices>}
                            </div>}

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;