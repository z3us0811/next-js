import React from 'react'
import {useRouter} from 'next/router'

// export const getServerSideProps = async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return {
//         props: { productData: data }
//     }
// }

const ProductID = (context) => {
    const router = useRouter();
    const {id} = router.query;
    console.log('id' - id);
    return(
        // <div className="row mt-5">
        //     {productData.map(item =>(
        //         <div className="col-md-3 mb-5">
        //             <a href="#" className={styles.item_wrapper}>
        //                 <div className={styles.image}><img src={item.image}/></div>
        //                 <div className={styles.title}>{item.title}</div>
        //                 <div className={styles.category}>{item.category}</div>
        //                 <div className={styles.price}>Rs. {item.price}</div>
        //             </a>
        //         </div>
        //     ))}
        // </div>
        <h2>this is product page - {id}</h2>
    )
}

export default ProductID