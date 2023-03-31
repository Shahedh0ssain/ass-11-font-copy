import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import ConfirmModal from '../../Shared/Modal/ConfirmModal';
import Service from '../Service/Service';

const MyOrder = () => {

  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);

  useEffect(() => {

    const email = user?.email;
    console.log(email);
    const url = `http://localhost:5000/orders?email=${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          return
        }
        return res.json()
      })
      .then(data => setOrder(data))

  }, [user]);



  const handleDelete = id => {

    // console.log(id);
    const url = `http://localhost:5000/ourcar/delete/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        const remaining = order.filter(service => service._id !== id);
        setOrder(remaining);
      });

  }

  return (
    <div style={{ backgroundColor: '#f8f8f8' }} className="container mx-auto py-5">
      {/* <h4 className='text-2xl text-red-500'>Latest Submission </h4> */}
      <h1 className='pb-5  text-6xl text-gray text-center'>My Items</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3  justify-items-center'>
        {
          order?.map(order => <Service
            key={order._id}
            btn='delete'
            service={order}
            handle={handleDelete}
            bool={false}
            bool2={true}
          ></Service>)
        }
      </div>


    </div>
  );
};

export default MyOrder;