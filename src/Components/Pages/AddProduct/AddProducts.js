

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { redirect, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';


const AddProducts = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {

        // console.log(typeof (data.quantity));
        toast.success('Congratulation add new product .')
        const email = user?.email;
        const datas = { ...data, email };

        // console.log("data send", datas);

        fetch('http://localhost:5000/ourcar', {
            method: 'POST',
            body: JSON.stringify(datas),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log("data send", data));

        reset();
        navigate("/");

    };

    if (loading) {
        return <h1 className='h-screen text-2xl '>Loading....</h1>
    }

    return (

        <div className=' md:h-screen flex justify-center items-center container mx-auto'>
            <div style={{
                boxShadow: ' rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }} className='rounded-md  m-5 p-7 md:px-8 md:py-10'>
                <h1 className='text-2xl font-semibold py-2'>Please Add a Car</h1>
                <form className='w-80 flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered w-full max-w-xs border-2  my-2 ' placeholder='Car Name' {...register("name")} />
                    <input className='input input-bordered w-full max-w-xs border-2  my-2 ' placeholder='Car Price' type='number' {...register("price", { valueAsNumber: true })} />
                    <textarea className='input input-bordered w-full max-w-xs border-2  my-2 ' placeholder='Car Description' {...register("dis", { required: true, maxLength: 90 })} />
                    <input className='input input-bordered w-full max-w-xs border-2  my-2   ' placeholder='Quantity' type="number"  {...register('quantity', { valueAsNumber: true })} />
                    <textarea className='input input-bordered w-full max-w-xs border-2  my-2 ' placeholder='Photo Url' type="number" {...register("picture", { required: true, maxLength: 90 })} />
                    {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs border-2 border-rose-600  " /> */}
                    <input className='btn' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProducts;