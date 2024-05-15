import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleUser } from "../api/users";

export default function Dashboard({token, user_id}) {
  // const { user_id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {
    async function getSingleUser() {
      try {
        const APIResponse = await fetchSingleUser(user_id, token);
        if (APIResponse) {
            console.log(APIResponse)
          setUser(APIResponse);
          // console.log('profile:', user.first_name);
        } else {
          setError("Failed to fetch user profile");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching profile");
      }
    }
    getSingleUser();
  }, [user_id, token]);

  

  return (
    <div className="container">
     

      {user && (
        <div className="card">
          
          {console.log('Dashboard: ', user.first_name, user)}
              
        <p className="card__name">{user.first_name}</p>
        <div className="grid-container">
          <div className="grid-child-posts">
            <p>Hello {user.first_name}</p>
          </div>
          <div className="grid-child-followers">
            <p>{user.billing_address}</p><br />
          </div>
        
        </div>

    
     
        </div>
        
      )}
    </div>
    
  );
}
