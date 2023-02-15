import React from 'react';

const Service = (props) => {

    const { service, handle,handle2, btn,btn2, bool } = props;
    // console.log(btn2,btn);

    const { _id, dis, name, picture, price, quantity } = service;




    return (
        <div className=" card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <h2 className="card-title">Price : ${price}</h2>
                <h2 className="card-title">Quentity : {quantity}</h2>
                <p>{dis}</p>
                <div className="">
                    {
                        bool ?
                            <div className=''>
                                <button className="btn hover:bg-red-600 w-full mt-2 " onClick={() => handle2(_id)} >{btn2}</button>
                                <button className="btn hover:bg-red-600 w-full mt-2" onClick={() => handle(_id)} >{btn}</button>
                            </div>

                            :
                            <>
                                <button className="btn hover:bg-red-600 w-full" onClick={() => handle(_id)} >{btn}</button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;