import PropTypes from "prop-types";
import React from "react";
import styles from "./Header.module.scss";

const Header = ({logo, children}) => { 
    return (
        <section className={styles.App}>
            <header className={styles.App_header}>
                <img src={logo} className={styles.App_logo} alt="logo" />
                {/* for some children elements that comes from Prop "children"*/}
                {children}
            </header>
        </section>
    );
};

Header.protoType = {
    logo: PropTypes.object.isRequired,
    data: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired 
};

export default Header;