import React from 'react';

import LogoIco from '../../assets/img/logo.svg';

// styles
import styles from './Logo.module.css'

function Logo () {
    return (
        <img className={styles.logo} src={LogoIco} alt='logo' />
    );
};

export default Logo;
