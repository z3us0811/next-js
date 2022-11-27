import React from "react";
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row justify-content-between align-items-end'>
                        <div className="col-3">
                            <div className={styles.footer_logo}>
                                <img src='icon.png' />
                            </div>
                        </div>
                        <div class="col-3 text-end">
                            <h6>Copyright 2022. All rights reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer