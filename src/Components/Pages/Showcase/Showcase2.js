import React from 'react';
const Showcase2 = () => {
    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/h2d4mBm/hero-bg22222.jpg")`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundAttachment: "fixed",
            backgroundRepeat: 'no-repeat',
            
        }} className='' >
            <div className=' md:h-screen  '>

                <div className='h-full w-full   bg-gradient-to-r from-[#12121289]  to-[#121111d6]    flex flex-col  justify-center container mx-auto py-20 '>
                    <h3 className='pb-5 text-2xl text-white text-center'>Interesting <span className='text-red-600'>Numbers</span></h3>
                    <h1 className='pb-10 text-5xl text-white text-center'>Fun Facts By The Numbers</h1>

                    <div className='grid grid-cols-2 md:grid-cols-4  gap-5  '>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <div className="card-body">
                                <svg className='w-10 text-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" /></svg>

                                <h2 className="card-title text-3xl">45k+</h2>
                                <p>Happy Customer</p>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">

                            <div className="card-body align-center">
                                <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" /></svg>
                                <h2 className="card-title text-3xl">
                                    500+</h2>
                                <p>Cars in Garage</p>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">

                            <div className="card-body">
                                <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM96 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm352-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" /></svg>
                                <h2 className="card-title text-3xl">50+</h2>
                                <p>Car Center Solutions</p>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">

                            <div className="card-body">
                                <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24V24zM185.8 224H326.2c6.8 0 12.8 4.3 15.1 10.6L360.3 288H151.7l19.1-53.4c2.3-6.4 8.3-10.6 15.1-10.6zm-75.3-10.9L82.2 292.4C62.1 300.9 48 320.8 48 344v40 64 32c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V448H384v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V448 384 344c0-23.2-14.1-43.1-34.2-51.6l-28.3-79.3C390.1 181.3 360 160 326.2 160H185.8c-33.8 0-64 21.3-75.3 53.1zM128 392c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm280-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM39 39c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L73 39c-9.4-9.4-24.6-9.4-33.9 0zm400 0L391 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" /></svg>
                                <h2 className="card-title text-3xl">45k+</h2>
                                <p>Total Kilomete</p>

                            </div>
                        </div>


                        {/* <div className='bg-white p-10'>
                            <p className=''></p>
                            <h1 className='text-3xl font-bold  text-black'>950</h1>
                            <h3 className='text-lg text-black '>NEW CARS IN STORK</h3>
                        </div> */}

                    </div>
                </div>

            </div>
        </div >
    );
};

export default Showcase2;