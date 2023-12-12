import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/soniyaprasad77')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl width-100%'>Github followers: {data.followers}
    </div>
    <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xl width-100%'>Github followings: {data.following}
    </div>
    <div className="flex justify-center items-center text-center m-4  bg-gray-600 text-white p-4 text-3xl width-100%">
    <img src={data.avatar_url} alt="Git picture" width={300} class="max-w-full max-h-full" />
    
    </div>
    </>
    

  )
}

export default Github
