import { Dropdown } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ServiceList.css';
const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' }
]
const ServiceList = () => {
    const [orderItem,setOrderItem] = useState([]);
    const [lodding,setLoading] = useState(true);

    //Load order item
    useEffect(()=>{
        fetch('https://damp-cliffs-08620.herokuapp.com/orderItem')
        .then( res => res.json())
        .then( data => {
            if(data){
                setOrderItem(data);
                setLoading(false);
            }
        })
    },[]);

    // Change a order item value
    const change = (e, id) => {
        fetch(`https://damp-cliffs-08620.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: e.value})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Status updated successfully')
            }
        })
    };
    return (
        <div>
            <div>
           { lodding ? <div style={{width: '100%'}} className="d-flex algin-items-center justify-content-center">
           
           </div>:
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderItem.map( item => <tr key={item._id}> 
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.project}</td>
                            <td>{item.projectDetails}</td>
                            <td>
                                <Dropdown  options={options} onChange={(e) => {change(e, `${item._id}`)}} value={item.status ? item.status: "pending"} placeholder="Select an option" />
                            </td>
                        </tr>)
                    }
                        
                </tbody>
            </Table>}
        </div>
        </div>
    );
};

export default ServiceList;