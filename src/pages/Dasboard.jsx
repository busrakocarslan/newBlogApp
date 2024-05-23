import React, { useEffect } from 'react'
import useBlogRequest from '../services/useBlogRequest'
import { useSelector } from 'react-redux'
import Card from '../component/blog/Card'

const Dasboard = () => {
  const { getBlogs }=useBlogRequest()
  const {blog,error,loading}=useSelector(state=>state.blogs)

  useEffect(() => {
    getBlogs()
},[])
  
return (
  <div className='flex justify-center flex-wrap gap-3 p-5'>
    {blog?.map((bg) => (
      <Card key={bg._id} {...bg} ></Card>
    ))}
  </div>
);
}

export default Dasboard