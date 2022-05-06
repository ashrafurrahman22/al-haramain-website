import { useEffect, useState } from "react";

const useProductDetail = productId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[productId])
    return [data, setData] ;
}

export default useProductDetail;