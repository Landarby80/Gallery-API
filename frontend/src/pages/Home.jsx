import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <div>
        <BackgroundImage />
        <div className='w-full h-screen  absolute top-[0px] left-0 bg-white/25 sm:h-screen md:h-screen'>
        <header className='flex space-x-4 border'>
            <div className=' flex-1 md:flex-1 sm:flex lg:flex-1 px-2 py-3 cursor-pointer 
                font-black text-4xl  italic tracking-widest'>
             GALLERY-API
            </div>
            <div className='flex-0 md:flex sm:flex px-2 py-3 cursor-pointer text-2xl
                font-bold text-white hover:text-blue-900  tracking-wide'>
                Home
             </div>
             <div className='flex-0 md:flex sm:flex px-2 py-3 cursor-pointer text-2xl
                font-bold text-white hover:text-blue-900 tracking-wide'>
                Gallery
             </div>
             <div className='flex-0 md:flex sm:flex px-2 py-3 cursor-pointer text-2xl
                font-bold text-white hover:text-blue-900 tracking-wide'>
                API
             </div>
            
        </header>

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '> 
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> WELCOME TO    GALLERY-API </h1>
                <h2 className='flex sm:text-3xl text-2xl pl-4 text-gray-800 '> 
                  CHECK OUR
                <TypeAnimation
            sequence={[
        // Same substring at the start will only be typed out once, initially
                'GALLERY',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'API',
                1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', paddingLeft:'5px', display: 'inline-block' }}
            repeat={Infinity}
            />
          </h2>

        </div>    
        
      </div>
    </div>
  )
}

export default Home
