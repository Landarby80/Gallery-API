import React from 'react'
import background from '../assets/background.png'

const BackgroundImage = () => {
    return (
        <div id='main'>
          <img src={background} alt="image" 
          className='w-full h-screen object-cover bg-cover bg-center  sm:h-screen md:h-screen lg:h-screen '/>
        </div>
      )
    }
    

export default BackgroundImage
