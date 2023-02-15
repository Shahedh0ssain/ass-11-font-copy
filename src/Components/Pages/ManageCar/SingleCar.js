import React from 'react';

const SingleCar = (props) => {
    // console.log(props);

    const { service, handleDelete } = props;
    const { _id, dis, name, picture, price, quantity } = service;

    const divStyles = {
        boxShadow: ' rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
    };

    return (

        <div className=" card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <h2 className="card-title">Price : ${price}</h2>
                <h2 className="card-title">Quentity : {quantity}</h2>
                <p>{dis}</p>
                <div className="">
                    <button className="btn hover:bg-red-600 w-full" onClick={()=>handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>

    );
};

export default SingleCar;