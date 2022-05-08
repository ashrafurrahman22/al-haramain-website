import { useEffect, useState } from "react";

const useProductDetail = productId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `https://safe-basin-69461.herokuapp.com/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[productId, data])
    return [data, setData] ;
}

export default useProductDetail;