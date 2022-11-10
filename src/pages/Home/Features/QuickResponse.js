import React from 'react';
import quick1 from '../../../assets/images/features/quick1.jpg'
import { BiRightArrowCircle } from 'react-icons/bi';

const QuickResponse = () => {
    return (
        <div className='lg:px-12 '>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-col lg:flex-row justify-between items-center pb-2 space-y-10 lg:space-y-0">
                        <div className="avatar">
                            <div className="w-64 rounded">
                                <img src={quick1} alt='man' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl pb-4'>About Company</h2>
                            <div className='space-y-5'>
                                <div className='flex items-center '>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Easy to  Order  </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">We offer free support </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Finest Consulting Team </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">First Quality Seeds  </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Modern Machines  </p>
                                </div>
                            </div>

                        </div>
                        <div className='space-y-3 '>
                            <h2 className='text-2xl'>Our Mission <br /> Statement</h2>
                            <p>We are always open to cater  </p>
                            <p>your best services for</p>
                            <p>Industrial Piping Products.</p>
                            <button className='btn btn-primary'>Explore More</button>
                        </div>
                        <div className="avatar">
                            <div className="w-64 rounded">
                                <img src='https://i.ibb.co/gtJM2Hx/img1.jpg' alt='factory' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuickResponse;