//import PropTypes from "prop-types";
import React from "react";
import { NavLink } from 'react-router-dom';
//import styles from "./Navigation.module.scss";

const Navigation = () => { 
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/api">Api</NavLink>
        </div>
    );
};

export default Navigation;