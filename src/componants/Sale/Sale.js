import React from 'react';

const Sale = (props) => {
    const {title,price} = props.sale
   
    return (
                <li className="list-group-item d-flex shadow justify-content-between mb-3 ">
                    <span>{title}</span> <spna>${price}</spna>
                </li>

        
        
    );
};

export default Sale;