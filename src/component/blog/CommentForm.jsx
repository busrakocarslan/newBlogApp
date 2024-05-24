import React from 'react'
import { useSelector } from 'react-redux';


const CommentForm = () => {
  const { blogDetail } = useSelector((state) => state.blogs);
  // console.log(blogDetail);
  console.log(blogDetail);
  const yorumlar= blogDetail?.comments
  console.log(yorumlar);
  

  return (
    <div >
    {yorumlar?.map((comment) => (
      <div key={comment._id} className=' border border-1 border-fuchsia-700 text-center'>
        <p>{comment.userId.username}</p><hr/>
        <p className='"text-gray-400 text-sm mt-1 h-[100px] overflow-auto line-clamp-1...'>{comment.comment}</p>
        {/* You can render other details of the comment here */}
      </div>
    ))}
    
  </div>
   
    
  )
}

export default CommentForm