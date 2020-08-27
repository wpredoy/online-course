import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import './Course.css'

const Course = (props) => {
    const {name,img,price}= props.cart;
    const handelAddCourse = props.handelAddCourse;
    console.log(name)
    
    return (
        <div className="cardStyle">
            <div className="card">
                <img src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price:${price}</p>
                    <button className="btn btn-primary" onClick={() => handelAddCourse(props.cart)}><FontAwesomeIcon icon={ faCartPlus } /> Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;