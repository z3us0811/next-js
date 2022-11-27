import React from 'react';
import styles from '../../styles/Batches.module.css';

//SSR - Pages will only be ready on click of the url - Best for dynamic site like ecommerce
//SSG - All the pages are already Ready on Server Side - Best for static site like 

// This page is SSG

export const getStaticPaths = async () => {
    // const arr = [2022, 2021, 2020, 2019, 2018];
    const response = await fetch('https://fakestoreapi.com/products');
    const arr = await response.json();
    const paths = arr.map((item) => {
        return {
            params: { year: item.id.toString() }
        }
    })
    return {
        paths,
        fallback: false //if page fails- go for 404
    }
}

export const getStaticProps = async (context) => {
    console.log(context.params);
    const temp = context.params.year;
    const response = await fetch('https://fakestoreapi.com/products/' + temp);
    const data = await response.json();
    return {
        props: {
            res: data,
            notfound: true
        }
    }
}

const Year = ({ res }) => {
    console.log('res' - res);
    return (
        <div class="container my-5">
            <div class="row">
                <div class="col-md-6 my-5">
                    <div className={styles.image_cont}>
                        <img src={res.image} />
                    </div>
                </div>
                <div class="col-md-6 my-5">
                    <div className={styles.product_info}>
                        <div className={styles.title}>{res.title}</div>
                        <div className={styles.category}>{res.category}</div>
                        <div className={styles.ratings}>
                            <div className={styles.rate}>{res.rating.rate}
                            <span className={styles.icon}></span></div>
                            <div className={styles.separator}>|</div>
                            <div className={styles.count}>{res.rating.count} Ratings</div>
                        </div>
                        <div className={styles.price}>Rs. {res.price}</div>
                        <div className={styles.info}>{res.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Year