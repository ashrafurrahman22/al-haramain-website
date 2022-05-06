import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [items, setItems]  = useState({});
    useEffect(()=>{

        const getItems = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/addItem?email=${email}`;
            const {data} = await axios.get(url);
            setItems(data);
        }
        getItems();
        
    }, [user])

    return (
        <div className='mt-3' style={{height: '530px'}}>
            <h2>this is my items:{items.length}</h2>
        </div>
    );
};

export default MyItems;