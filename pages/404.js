import React, { useEffect } from 'react';
import {useRouter} from 'next/router';

const Notfound = () => {

    const router = useRouter();

    useEffect(()=> {
        router.push('/about');
    }, [])

    return (
        <h3>404 | Page not found</h3>
    )
}

export default Notfound