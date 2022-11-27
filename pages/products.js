import React from 'react'
import styles from '../styles/Products.module.css';

export const getServerSideProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return {
        props: { productData: data }
    }
}

const products = (props) => {
    const {productData} = props;
    return(
        <div className="row mt-5">
            {productData.map(item =>(
                <div className="col-md-3 mb-5">
                    <a href={'/batches/' + item.id} className={styles.item_wrapper}>
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

export default products