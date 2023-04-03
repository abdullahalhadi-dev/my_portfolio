import React from 'react'
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {

const year = new Date().getFullYear();

  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className="container">
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button className='flex bg-primaryColor text-white font-[500] items-center gap-2 hover:bg-smallTextColor ease-in duration-300 px-4 py-2 rounded-[8px]'><AiOutlineMail/> Hire Me</button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam hic quia nobis ipsa. Temporibus nulla labore, iure voluptas esse non.</p>
          
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-15px]'>Follow Me:</span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="#github" className='text-gray-300 font-[500] text-[18px]'>
                  <AiFillGithub className='mt-1 ml-1'/>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="#facebook" className='text-gray-300 font-[500] text-[18px]'>
                  <FaFacebookF className='mt-1 ml-1'/>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="#github" className='text-gray-300 font-[500] text-[18px]'>
                  <AiOutlineInstagram className='mt-1 ml-1'/>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="#github" className='text-gray-300 font-[500] text-[18px] text-center'>
                  <AiFillYoutube className='mt-1 ml-1'/>
                </a>
              </span>
            </div>
          </div>

        </div>

            <div>
              <ul className='flex items-center justify-center gap-10 mt-10'>
                <li><a className='text-gray-400 font-[600]' href="#about">About</a></li>
                <li><a className='text-gray-400 font-[600]' href="#services">Services</a></li>
                <li><a className='text-gray-400 font-[600]' href="#portfolio">Portfolio</a></li>
                <li><a className='text-gray-400 font-[600]' href="#contact">Contact</a></li>
              </ul>
            </div>
      </div>
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>P</span>
              
                <div className="leading-[20px]">
                  <h2 className='text-gray-200 font-[500] text-[18px]'>Pranto</h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>Personal</p>
                </div>

              </div>
            </div>

            <div>
              <p className='text-gray-400 text-[14px]'>Copyright {year} developed by Pranto - All right reserved.</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer