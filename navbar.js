import React, {Fragment, useState} from 'react'
import { FiSearch, FiLogIn, FiUser } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { IoMdNotificationsOutline  } from "react-icons/io";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const handleClick = () => {
      setShow(current => !current);
    }
  return (
    <Fragment>        
        <div className='bg-transparent md:bg-white md:shadow absolute md:static w-full top-7 flex z-[30] md:block md:top-0 md:z-0'>
            <div className="container mx-4 md:mx-auto w-full max-w-6xl md:px-4 flex md:py-4">
                <button onClick={handleClick} className='bg-white md:hidden rounded-lg p-2 text-xl'>
                    <IoMenu/>
                </button>
                <img className='hidden md:block' src='/assets/images/logo.png' alt='logo'/>
                <div className="form-search w-full md:w-80 bg-white md:bg-[#EEEEEE] rounded-lg ml-4 flex text-[#8A8A8A] text-sm px-6 py-2 md:py-0">
                    <input className='w-full text-black bg-transparent focus:outline-none' placeholder='Cari di sini ...' alt='search'/>
                    <span className='my-auto text-lg'> <FiSearch/> </span>
                </div>
                <div className="hidden md:block ml-auto my-auto">
                    {/* <button onClick={() => navigate('/login')} className='flex bg-primary text-white py-2 px-4 rounded-xl hover:bg-[#7126B5CC] ease-in-out duration-200'>
                        <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn/> </span> Masuk
                    </button> */}
                    <div className='flex'>
                        <button className='text-2xl  mr-3'>
                            <AiOutlineUnorderedList/>
                        </button>
                        <button className='text-2xl  mr-3'>
                            <IoMdNotificationsOutline/>
                        </button>
                        <button className='text-2xl  mr-3'>
                            <FiUser/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div role='button' onClick={handleClick} className={`overlay fixed z-[999] h-full w-full bg-slate-600 opacity-40 inset-x-0 cursor-default transition ease-in-out duration-700 md:-translate-x-full ${show ? "-translate-x-full" : ""}`}></div>
        <div className={`fixed bg-white h-full left-0 w-1/2 z-[999] md:-translate-x-full p-5 ${show ? "-translate-x-full transition ease-in-out duration-1000" : "transition ease-in-out duration-1000"}`}>
            <div className='title flex justify-between mb-3'>
                <h1 className='font-bold my-auto'>Second Hand.</h1>
                <button onClick={handleClick} className='text-3xl'>
                    <IoClose/>
                </button>
            </div>
            <div className="">
                <button onClick={() => navigate('/login')} className='flex bg-primary text-white py-2 px-4 rounded-xl hover:bg-[#7126B5CC] ease-in-out duration-200'>
                    <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn/> </span> Masuk
                </button>
            </div>
        </div>
    </Fragment>
  )
}

export default Navbar