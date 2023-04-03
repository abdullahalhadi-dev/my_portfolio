import React from 'react'

import HeroImg from '../../assets/images/hero.svg';
import CountUp from 'react-countup';

import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineAppstore } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                <div className='w-full md:basis-1/2'>
                    <h5 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className='text-headingColor font-[600] text-[16px]'>
                        Hello, Welcome
                    </h5>
                    <h1
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px]'
                    >
                        I'm Abdullah Pranto <br/>Web Developer
                    </h1>
                    <div
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-delay="200"
                    className='flex items-center gap-6 mt-7'>
                        <a href="#contact">
                            <button className='flex bg-primaryColor text-white font-[500] items-center gap-2 hover:bg-smallTextColor ease-in duration-300 px-4 py-2 rounded-[8px]'><AiOutlineMail/> Hire Me</button>
                        </a>
                        <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'> See Portfolio</a>
                        
                    </div>

                    <p
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
                    >
                        <span><AiOutlineAppstore/></span>
                    I'm a Web application lerner. Trying to be a smart and intelligent application creator of we application.
                    </p>

                    <div className='flex items-center gap-9 mt-14'>
                        <span className='text-smallTextColor text-[15px] font-[600]'>
                            Follow me:
                        </span>
                        <span>
                            <a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'>
                                <AiFillYoutube/>
                            </a>
                        </span>
                        <span>
                            <a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'>
                                <FaFacebookF/>
                            </a>
                        </span>
                        <span>
                            <a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'>
                                <AiOutlineInstagram/>
                            </a>
                        </span>
                        <span>
                            <a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'>
                                <AiFillGithub/>
                            </a>
                        </span>
                    </div>
                </div>

                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={HeroImg} alt="" />
                    </figure>
                </div>
                
                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingTextColor font-[700] text-[32px]'>
                            <CountUp start={0} end={6} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingTextColor font-[600] text-[18px]'>Years of Experience</h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingTextColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='%'/>
                        </h2>
                        <h4 className='text-headingTextColor font-[600] text-[18px]'>Success Rate</h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingTextColor font-[700] text-[32px]'>
                            <CountUp start={0} end={150} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingTextColor font-[600] text-[18px]'>Happy Clients</h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingTextColor font-[700] text-[32px]'>
                            <CountUp start={0} end={200} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingTextColor font-[600] text-[18px]'>Project Completed</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero