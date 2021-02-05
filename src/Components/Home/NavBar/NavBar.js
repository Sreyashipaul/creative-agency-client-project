import React, { useContext } from 'react';
import { Nav,Container,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../../App';
const NavBar = () => {
    const{loggedInUser} = useContext(UserContext);
    return (
        <div>
      < div className="g pt-5">
            <Container>
            <Navbar  expand="lg">
                <Navbar.Brand href="#home">
                  <img style={{height: '50px',maxWidth: '150px'}} className="img-fluid" src="https://i.ibb.co/6DdQDrX/logo.png"  alt=""/>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-item ml-auto d-flex align-items-center">
                            <Link to="/" className="mr-5">Home</Link>
                            <Link to="" className="mr-5">Our Portfolio</Link>
                            <Link to="" className="mr-5">Our Team</Link>
                            <Link to="" className="mr-5">Contact Us</Link>
                             
                          { loggedInUser.email ?<Link to="/dashboard"  className="login-style d-flex align-items-center justify-content-center btn btn-brand text-white">Dashboard</Link>: <Link to="/login"  className="login-style d-flex align-items-center justify-content-center btn btn-brand text-white">Login</Link>
                          

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
            
        </div>
    );
};

export default NavBar;