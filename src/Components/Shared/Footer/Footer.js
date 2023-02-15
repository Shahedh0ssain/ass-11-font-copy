import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div style={{ backgroundColor: '#20232a', height: "150px" }} className=' text-white flex items-center justify-center'>
            <div>
                <h5 className='text-xl text-center'>Development by <Link target={"_blank"} className='text-decoration-none text-red-400' href="https://github.com/Shahedh0ssain">Shahedh0ssain</Link></h5>
                <h6 className='text-center'>Copyright © {year} </h6>
            </div>
        </div>
    );
};

export default Footer;