import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    const url = `http://localhost:5000/product`;
    fetch(url,{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => console.log(result));
      reset();
  };



    return (
        <div style={{height:'530px'}} className='w-50 mx-auto my-5'>
          <h3 className='text-center'>Add a New Product</h3>
    <form className='d-flex flex-column gap-3' onSubmit={handleSubmit(onSubmit)}>
      <input className='rounded-3' placeholder='Product Name' {...register("name", {required:true})} />
      <input className='rounded-3' placeholder='Short Description' {...register("description", { required: true })} />
      <input className='rounded-3' placeholder='Price' {...register("price", { required: true })} />
      <input className='rounded-3' placeholder='Quantity' {...register("quantity", { required: true })} />
      <input className='rounded-3' placeholder='supplier' {...register("supplier", { required: true })} />
      <input className='rounded-3' placeholder='image URL' {...register("img", { required: true })} />
      <input className='rounded-3 btn btn-primary' type="submit" value="add item"/>
    </form>
        </div>
    );
};

export default AddItems;