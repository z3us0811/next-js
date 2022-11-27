import React from "react";
import Image from 'next/image';
import styles from '../styles/Courses.module.css';

export const getStaticProps = async () => {
    //api call
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return {
        props : {productData: data}
    }
}

const Courses = (props) => {
    const {productData} = props;
    return(
        <div className="row mt-5">
            {productData.map(item =>(
                <div className="col-md-3 mb-5">
                    <a href="#" className={styles.item_wrapper}>
                        <div className={styles.image}><img src={item.image}/></div>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.category}>{item.category}</div>
                        <div className={styles.price}>Rs. {item.price}</div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Courses