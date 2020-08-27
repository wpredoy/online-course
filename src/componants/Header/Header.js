import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <h1><sapn className="headerStyle">O</sapn>ur Online Course</h1>
            <button> <FontAwesomeIcon icon={ faAngleDoubleDown } /> See now</button>
        </div>
    );
};

export default Header;