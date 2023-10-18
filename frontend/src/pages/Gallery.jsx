import React, { useState,useEffect } from 'react'
import axios from 'axios';

const baseURL = "http://localhost:8000/api/v1/data";

const Gallery = () => {
//     const [post,setPost]= useState(null)

//     useEffect(() => {
//         axios.get(baseURL).then((response) => {
//             setPost(response.data);
//           });
//         }, []);
      
//         if (!post) return null;

//     const s = post.data
//     const s1 = s.map(data => data.img)   
//     const s2 = s.map(data => data.prompt)    
//     console.log(s)

//   return (
//     <>
//     <div>
//     <div>{s1}</div>
//     <div>{s2}</div>
// </div>
// </>
//   )
// }
const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseURL); 
      setData(response.data);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='bg-purple-100'>
      {data.data.map(item => (
        <div id='Gallery' key={item.id} >
            <h1 className='font-black text-4xl  italic'> Title: {item.title}</h1>
          <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
            <div className='-m-0 flex flex-wrap md:-m-2'>
                    <h2 className='font-black tracking-widest italic text-left text-purple-600 text-opacity-100 font-serif overflow-clip'> 
                        <p className='underline text-2xl'> Prompt: </p>   
                        {item.prompt}
                    </h2>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-full p-1 md:p-2'>
                        <img src={item.img} alt={item.title} className='rounded-xl group-hover:opacity-10' />
                        
                    </div>

                </div>
            </div>
          </div>
          
          
        </div>
      ))}
    </div>
  );
};
export default Gallery
