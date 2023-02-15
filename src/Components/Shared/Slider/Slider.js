import React from 'react';

const Slider = () => {
    // const slider = [
    //     "https://i.ibb.co/61zs6Kh/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg",
    //     "https://autohive-html.themetags.com/assets/img/home1/car-8.jpg",
    //     "https://autohive-html.themetags.com/assets/img/home1/car-8.jpg",
    // ]
    return (
        <div className='h-screen'>
            <div style={{}} className="carousel w-full ">
                <div style={{backgroundColor:'rgb(47,46,46)'}} id="slide1" className="relative bg-black carousel-item  w-full h-screen">
                    <div className='container flex items-center justify-between'>
                        <div className='w-1/2' >
                            <h1 className='font text-5xl text-blue-600/100'>Lamborghini Centenario</h1>
                            <p className='font text-xl text-blue-600/100'>Distinctively optimize web-enabled materials with functional markets.Distinctively optimize web-enabled materials with functional markets</p>
                            <ul>
                                <li className='text-xl text-blue-600/100'>Leather Seats</li>
                                <li className='text-xl text-blue-600/100'>Leather Seats</li>
                                <li className='text-xl text-blue-600/100'>Leather Seats</li>
                            </ul>
                            <a className='text-blue-600/100' href="">
                                <span></span>
                                Explore More

                            </a>
                        </div>

                        <div className='w-1/2 pl-96 '>
                            <img className='absolute  bottom-0 right-[55px] max-w-{850px}' src="https://i.ibb.co/kmmPgfj/hero-car-3.png" alt="" srcSet="" />
                        </div>

                    </div>
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="bg-black carousel-item relative w-full">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                    <div className='container flex items-center justify-between'>
                        <div className='font text-5xl text-blue-600/100'>This is Slider 002</div>

                        <div>
                            <img src="https://i.ibb.co/kmmPgfj/hero-car-3.png" alt="" srcSet="" />
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="bg-black carousel-item relative w-full">
                    <div className='container flex items-center justify-between'>
                        <div className='font text-5xl text-blue-600/100'>This is Slider 003</div>

                        <div>
                            <img src="https://i.ibb.co/kmmPgfj/hero-car-3.png" alt="" srcSet="" />
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="bg-black carousel-item relative w-full">
                    <div className='container flex items-center justify-between'>
                        <div className='font text-5xl text-blue-600/100'>This is Slider 004</div>

                        <div>
                            <img src="https://i.ibb.co/kmmPgfj/hero-car-3.png" alt="" srcSet="" />
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;