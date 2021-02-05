import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import SingleServices from '../SingleServices/SingleServices';

import './CoustomerServices.css';
const CountomerServices = () => {
    const {loggedInUser} = useContext(UserContext);

    // Order Item state
    const [orderItem,setOrderItem] = useState([]);

    //Spiner State
    const [loadign,setLoading] = useState(true);

    // Loading customer order by email
    useEffect(()=>{
        fetch('https://damp-cliffs-08620.herokuapp.com/customerOrder?email=' + loggedInUser.email)
        .then( res => res.json())
        .then( data => {
            if(data){
                setOrderItem(data);
                setLoading(false)
            }
        })
    },[])
    return (
        <div>
             <Row> 

{
  loadign ? <div style={{width: '100%'}} className="d-flex algin-items-center justify-content-center">
  <Spinner  animation="border" variant="primary" /> 
 </div>:  orderItem.map( item => <SingleServices key={item._id} item={item}></SingleServices>)
}

</Row>
        </div>
    );
};

export default CountomerServices;