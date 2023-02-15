import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';
import Service from '../Service/Service';

const Services = () => {
    const [services] = UseProducts();
 
    const navigate = useNavigate();

    const showDetail = id => {
        const path = `/ProductId/${id}`
        navigate(path);
    }

    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className="container mx-auto py-5">
            <h4 className=' pl-2 text-xl md:text-2xl lg:text-2xl  text-red-500 pr-2'>Latest Submission </h4>
            <h1 className='pl-2 pb-5 text-4xl  md:text-6xl lg:text-6xl text-gray '>Find the Best Deals For You</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3  justify-items-center'>
                {
                    services.slice(0,6).map(service => <Service
                        key={service._id}
                        btn='manage'
                        service={service}
                        handle={showDetail}
                        bool={false} 
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;