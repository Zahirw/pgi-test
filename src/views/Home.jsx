import React, { useEffect, useState } from 'react'
import { getListData } from '../service/api'

const Home = () => {
  const [jobList, setJobList] = useState([])

  useEffect(() => {
    fetchJobList()
  }, []);

  const fetchJobList = async() => {
    await getListData()
      .then(response => {
        setJobList(response.data)
        console.log(response)
      })
      .catch(err => {
        console.error(err)
      })
  }
  return (
  <>
    <div className='bg-blue-400 p-8'>
      <h1 className='text-2xl text-white'>GITHUB Jobs</h1>
    </div>
    <div className='h-full w-full bg-gray-200 flex justify-center'>
      <div className='container p-5'>
        <input />
        <div className='rounded shadow bg-white mt-5'>
          <h1 className='text-3xl p-10 font-bold'>Job List</h1>
            { jobList.map(data =>
              <div className='border-y grid grid-cols-2 p-10'>
                <div className='col-span-1'>
                  <h1 className='text-xl text-blue-500'>{data.title}</h1>
                  <p className='text-gray-500'>{`${data.company} - ${data.type}`}</p>
                </div>
                <div className='col-span-1 text-right'>
                  <p className='text-gray-500'>{data.location}</p>
                  <p className='text-gray-500'>{data.created_at}</p>
                </div>
              </div> 
            )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Home