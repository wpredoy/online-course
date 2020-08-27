import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons'
import fakeData from '../../fakeData'
import Course from '../Course/Course';
import Sale from '../Sale/Sale';

const Product = () => {
     // console.log(fakeData)
     const fake = fakeData.slice(0,15);
     const [course, setCourse] = useState(fake);
     const [sale, setSale] = useState([])
     
     const handelAddCourse= (name) => {
         console.log("hi",name)
         const newsale = [...sale, name];
         setSale(newsale)
     }
 
     let totalPrice = sale.reduce((item, totalitem) => item + totalitem.price, 0)

    return (
        <div className="container-fluid px-2 ">
            <div className="row">
                <div className="col-md-9 row border-right ">
                    {course.map(product => <Course cart ={product} handelAddCourse={handelAddCourse}></Course>)}
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-center pt-2">Select Course: {sale.length}</h2>
                    <ul className="list-group">
                        {
                            sale.map(sale=> <Sale sale={sale}></Sale>)
                        }
                    </ul>
                    <button className="btn btn-warning"> <FontAwesomeIcon icon={ faMoneyCheckAlt } /> ChackOut: ${totalPrice}</button>
                </div>
            </div>
            
                
          
            
        </div>
    );
};

export default Product;