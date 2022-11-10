import React from 'react';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import camera from '../../assets/project/camera1.png';
import education from '../../assets/project/edu1.png';
import handyman from '../../assets/project/handy1.png';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

const MyPortfolio = () => {
    return (
        <section>
            <PageTitle title="My Portfolio -"></PageTitle>
            <div className='px-5 lg:px-12 bg-[#f0efef] pb-10'> 
                <div className='flex flex-col md:flex-row items-center justify-center gap-12 py-10'>
                    <div className="avatar">
                        <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/gvh42gD/20221021-022156.png" alt='Maruf' />
                        </div>
                    </div>
                    <div >
                        <div className='text-lg space-y-2'>
                            <h3 className='text-2xl'>Masudul Alam Maruf</h3>
                            <p>Email : <span className='font-bold'>mamaruf04@gmail.com</span></p>
                            <p>Phone : 01690003705 </p>
                        </div>
                        <div className='flex pt-5 gap-5'>
                            <a href="https://www.linkedin.com/in/mamaruf04/" target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#067aee]'>
                                <span className='text-3xl text-[#094f94]'><AiOutlineLinkedin /></span>
                            </a>

                            <a href="https://github.com/mamaruf04" target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#2a8ad8]'>
                                <span className='text-3xl text-[#0c0e10]'><AiOutlineGithub /></span>
                            </a>
                            <a href='https://www.facebook.com/masudulalammaruf' target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#067aee]'>
                                <span className='text-3xl text-[#094f94]'><AiOutlineFacebook /></span>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"> Education Background </h2>
                            <div className='py-3 '>
                                <h4 className='font-bold'>SSC 2019</h4>
                                <p>Dr.Shahidullah Academy, Chattogram</p>
                            </div>
                            <div className='py-3 '>
                                <h4 className='font-bold'>HSC 2022</h4>
                                <p>Hathazari Govt. Collage, Chattogram</p>
                            </div>
                            <div className='py-3 '>
                                <h4 className='font-bold'>BBA (Running) </h4>
                                <p>Hathazari Govt. University, Chattogram</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"> Technologies and Skills </h2>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Expert:</h4>
                                <p>HTML 5, CSS 3, Tailwind CSS , Bootstrap 5, JavaScript (ES6), React.Js, React-Bootstrap,React-router, Firebase Authentication.</p>
                            </div>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Comfortable:</h4>
                                <p>Mongodb , Express , Node , React Query , Axios .</p>
                            </div>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Familiar:</h4>
                                <p> Mailchimp , Payment Gateway ,Material Ui.</p>
                            </div>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Tools & Others:</h4>
                                <p>Git, Github,VScode, Figma, Firebase, Netlify , Render , Chrome Dev Tools  .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <h2 className='text-center pb-10  text-4xl font-semibold'>RECENT PROJECTS</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="card lg:max-w-lg bg-base-100 ">
                        <figure>
                            <a href="https://i.ibb.co/VWV24Nb/camera.jpg" target="_blank" rel="noopener noreferrer">
                                <img className='w-full' src={camera} alt="digital-camera-demo-site" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Digital Camera Warehouse</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2">
                                <button className='btn btn-outline btn-xs btn-primary'>React </button>
                                <button className='btn btn-outline btn-xs btn-primary'>Heroku </button>
                                <button className='btn btn-outline btn-xs btn-primary'>Firebase</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Node</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Mongodb</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Express</button>
                            </div>
                            <div className="flex  justify-between">
                                <a href='https://github.com/mamaruf04/' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3  btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Source Code</p>
                                        </div>
                                    </button>
                                </a>
                                <a href='https://digital-camera-warehouse.web.app/' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3 btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Live Link</p>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 ">
                        <figure>
                            <a href="https://i.ibb.co/vwHynsB/Books-store.png" target="_blank" rel="noopener noreferrer">
                                <img className='w-full' src={handyman} alt="handy-man-demo-site" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Books-store</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2 ">
                                <button className='btn btn-outline btn-xs btn-primary'>Tailwind</button>
                                <button className='btn btn-outline btn-xs btn-primary'>React</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Node</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Mongodb</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Express</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Render</button>
                            </div>
                            <div className="flex justify-between">
                                <a href='https://github.com/mamaruf04' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3  btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Source Code</p>
                                        </div>
                                    </button>
                                </a>
                                <a href='https://book-warehouse-bfb94.web.app/' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3 btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Live Link</p>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 ">
                        <figure>
                            <a href="https://i.ibb.co/5xCrbPJ/edu.png" target="_blank" rel="noopener noreferrer">
                                <img className='w-full' src={education} alt="education-demo-site" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Education Hub</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2">
                                <button className='btn btn-outline btn-xs btn-primary'>React</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Bootstrap 5</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Firebase</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Animation</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Axios</button>
                            </div>
                            <div className="flex  justify-between">
                                <a href='https://github.com/mamaruf04' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3  btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Source Code</p>
                                        </div>
                                    </button>
                                </a>
                                <a href='https://education-hub-101.web.app/' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3 btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Live Link</p>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default MyPortfolio;