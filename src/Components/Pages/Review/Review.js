import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';



const Review = () => {

    const [product, setProduct] = useState({});
    let { id } = useParams();
    //const { register, handleSubmit } = useForm();



    useEffect(() => {

        let url = `http://localhost:5000/ourcar/${id}`;
        //console.log(id);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [product]);



    const updateQuentity = event => {
        event.preventDefault();
        
        const quantity = parseInt(product.quantity) + parseInt(event.target.quantity.value);
      

        if (quantity > 0) {

            alert("updateCar added successfully");

            const updateCar = { quantity };
            console.log(updateCar);

            fetch(`http://localhost:5000/ourcar/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateCar),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Success:", data);
                    event.target.reset();
                });
        } else {
            alert("Please Insart positive number ");
        }
    }
   

    // try verson :
    // const QuentityDecrease = event => {
    //     event.preventDefault();
    //     alert("items quentity decrease");

    //   const quantity = parseInt(product.quantity);
    //   const updateCar = { quantity };
    //   console.log(updateCar.quantity);

    //     fetch(`http://localhost:5000/ourcar/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //          body: JSON.stringify(updateCar),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("Success:", data);
    //             //alert("items quentity decrease");

    //         });

    //     console.log("click");
    // }


    const QuentityDecrease = event => {
        event.preventDefault();
        const quantity = parseInt(product.quantity) - 1;
        alert("items quentity decrease");

        if (quantity >= 0) {
            const updateCar = { quantity };
            console.log(updateCar);

            fetch(`http://localhost:5000/ourcar/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateCar),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Success:", data);
                    //alert("items quentity decrease");

                });
        } else {
            alert("Please add items ");
        }
        console.log("click");
    }







    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product?.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product?.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2 className='card-title'>Quentity : {product?.quantity}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button onClick={QuentityDecrease} className="w-full  my-2 btn hover:bg-red-500 hover:text-white" >deliver</button>
                    {/* <button className="btn hover:bg-red-600 w-full" onClick={QuentityDecrease}>deliver</button> */}



                    <form onSubmit={updateQuentity} className="form-control flex  items-center ">
                        <div className="input-group">
                            <input type="number" name='quantity' placeholder="Type here" className="input input-bordered input-secondary w-full " />
                            <button className="btn" type='submit'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;