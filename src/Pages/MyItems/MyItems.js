import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MySingleItem from './MySingleItem/MySingleItem';
import './MyItem.css';

const MyItems = () => {


    const [user] = useAuthState(auth);
    const [items, setItems]  = useState([]);
    useEffect(()=>{

        const getItems = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/addItem?email=${email}`;
            const {data} = await axios.get(url);
            setItems(data);
        }
        getItems();
        
    }, [user, items]);
    console.log(items)
    return ( <div id='mainItemDiv' className='my-4'>
            <h3 className='text-center'>My Items</h3>
            <div id='singleMyItem' className='container'>
            { 
                items.map(item => <MySingleItem
                key={item._id}
                item = {item}
                ></MySingleItem> )
            }
            </div>
        </div>
        
    );
};

export default MyItems;