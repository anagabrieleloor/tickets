import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [token, setToken] = useState(null);
  const [user_id, setUserId ] =useState(null);

  
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setUserId(localStorage.getItem('user_id'));
  }, [])
  
  return (
 

             
                <>
                  <Link
                    to={`/users/login`}
                    className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    LOG IN
                  </Link>
                  <Link
                    to={`/users/signup`}
                    className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    REGISTER
                  </Link>
                </>
              
           
    
  );
}