import React from "react";
import styles from '../styles/About.module.css';
import scss from '../styles/color.module.scss';
import Image from 'next/image';
import Head from 'next/head';

const About = (props) => {
    return(
        <>
            <Head>
                <title>Next About Page</title>
            </Head>
            <div className="bg-info">
                <h2 className={styles.about_text}>This is About file</h2>
                <Image src='/icon.png' width={400} height={300} alt='react'/>
                <h2 className={scss.text_next}>red text</h2>
            </div>
        </>
    )
}

export default About