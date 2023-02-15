import React from 'react';

const Blogs = () => {
    return (
        <div  >
            <div className='m-5'>
                <h1 className='text-center text-3xl py-4'>Blogs</h1>
                <div style={{ border: '1px solid red', borderRadius: '15px' }} className=' p-5 mb-5'>
                    <h3 className='text-xl md:text-2xl font-semibold'>1. Difference between javascript and nodejs ?</h3>

                    <h4> <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>NodeJS is a Javascript runtime environment.</li>
                    </h4>
                </div>
                <div style={{ border: '1px solid red', borderRadius: '15px' }} className=' p-5  mb-5'>
                    <h3 className='text-xl md:text-2xl font-semibold'>2. When should you use nodejs and when should you use mongodb ?</h3>

                    <h4>
                        <li>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.</li>
                        <br />
                        <li>                        NodeJS's responsibilty is especially to execute your application.
                        </li>

                    </h4>


                </div>
                <div style={{ border: '1px solid red', borderRadius: '15px' }} className=' p-5 mb-5'>
                    <h2 className='text-xl md:text-2xl font-semibold'>3.1 What is the purpose of jwt ? </h2>
                    <li>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</li>
                    <br />
                    <h2 className='text-xl md:text-2xl font-semibold'> 3.2 How does it work ?</h2>
                    <li>In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.</li>


                </div>
            </div>
        </div>
    );
};

export default Blogs;