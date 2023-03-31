import React, { useState } from 'react';
import ConfirmModal from '../../Shared/Modal/ConfirmModal';

const Service = (props) => {

    const { service, handle, handle2, btn, btn2, bool, bool2 } = props;
    // console.log(props);
    const { _id, dis, name, picture, price, quantity } = service;
    const [toggle, setToggle] = useState(false);
    // const [toggleDeliver, setToggleDeliver] = useState(null);


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
                                <button className="btn hover:bg-red-600 w-full mt-2 " onClick={() => handle2(service._id)} >{btn2}</button>
                                <label for="my-modal-6" className="btn hover:bg-red-600 w-full mt-2" onClick={() => setToggle(true)} >{btn}</label>
                            </div>

                            :
                            <>
                                {bool2 ?
                                    <label for="my-modal-6" className="btn hover:bg-red-600 w-full mt-2" onClick={() => setToggle(true)} >{btn}</label>
                                    :
                                    <button className="btn hover:bg-red-600 w-full" onClick={() => handle(service._id)} >{btn}</button>
                                }
                            </>
                    }
                </div>
            </div>
            {
                toggle && <ConfirmModal
                    service={service}
                    btn={btn}
                    msg="Are you sure {btn}!!"
                    // setDelete={setServiceDelete}
                    handle={handle}
                ></ConfirmModal>
            }
            {/* {
                toggleDeliver && <ConfirmModal
                    services={service}
                    btn={bool ? btn2 : btn}
                    msg='Are you ready to deliver one item!!'
                    // setDelete={setServiceDelete}
                    handle={handle2}
                ></ConfirmModal>
            } */}
        </div>
    );
};

export default Service;