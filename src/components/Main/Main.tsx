import React from 'react';

// styles
import styles from './Main.module.css';

// img
import qrCode from '../../assets/img/qrcode.png';

// components
import Logo from "../Logo";

const DONATION_LINK = 'https://send.monobank.ua/jar/8gqV89JbBm'
const TARGET_IN_USD = 7600


function Main () {
    const url = `https://www.google.com/finance/converter?a=120&from='USD'&to='UAH'`

    fetch(url).then((response) => response.json())
        .then((data) => console.log(data));

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.topLine}>
                    <Logo />
                    <p>
                        Donate to Ukraine army!
                    </p>
                </div>
                <a className={styles.qrCodeLink} rel="noreferrer" href={DONATION_LINK} target='_blank' >
                    <img className={styles.qrCode} src={qrCode} alt='Click to donate!' />
                </a>
                <a className={styles.qrCodeButton} rel="noreferrer" href={DONATION_LINK} target='_blank' >
                    Donate now!
                </a>
                <p>
                    Target is {TARGET_IN_USD} $
                    <br/>
                    <span>(~ 280 000 ₴)</span>
                </p>
            </div>
        </div>
    );
};

export default Main;

