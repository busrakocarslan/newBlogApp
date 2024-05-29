import React from 'react'
import coming from "../assets/coming-5942155_1280.jpg"

const ComingSoon = () => {
  return (
    <div className='h-[70vh]' >
        <img style={{width:"500px", borderRadius:"50px",boxShadow:"2px 2px 2px  15px cadetblue", margin:"auto", padding:"5px", marginTop:"2rem"}} src={coming} alt="" />
    </div>
  )
}

export default ComingSoon