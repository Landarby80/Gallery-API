import React from 'react'

const Api = () => {
  return (
    <div id='Api' className='bg-purple-100'>
       <iframe 
      src="http://localhost:8000/docs"
      title="Swagger UI"
      width="100%"
      height="800px"
    />
    </div>
  )
}

export default Api
