import PropTypes from "prop-types";
import React from "react";
import styles from "./Layout.module.scss";

const Layout = ({children}) => { 

    return (
        <div className={styles.container}>
            <p>Layout</p>
            {children}
        </div>
    );
};

Layout.protoType = {
    children: PropTypes.element.isRequired
}; 

export default Layout;