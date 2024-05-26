import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogRequest from "../services/useBlogRequest";
import { useParams } from "react-router-dom";
import userAvatar from "../assets/avatars-2858669_1280.png"

const Profile = () => {
  const { users } = useSelector((state) => state.blogs);
  const { getUsers } = useBlogRequest();
  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);
   // İlk kullanıcıyı alıyoruz
   const user = users[0]; // İlk kullanıcıyı alıyoruz

   return (
     <div className=" text-center w-[50%] m-auto p-1 h-[80vh] uppercase font-fontSedan">
       <div>
         <img
           src={user.image}
           loading="lazy"
           alt={user.username}
           className="max-w-[250px] min-h-[250px] min-w-[250px] rounded-md mt-5 inline"
         />
         <p className=" underline">{user.username}</p>
         <p>{user.bio}</p>
         <p>{user.city}</p>
         
         
       </div>
       <img src={userAvatar} className="w-[250px] m-auto mt-10 "/>
     </div>
   );
 };
 
 export default Profile;