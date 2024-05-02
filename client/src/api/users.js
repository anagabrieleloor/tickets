const BASE_URL = 'http://localhost:8088/api';


//Get all users
export async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        return error;
    }
}

//Get user by ID
export async function fetchSingleUser(user_id) {
    try {
        const response = await fetch(`${BASE_URL}/users/${user_id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

//Sign up
export async function registerUser(email, password, first_name, last_name, billing_address, payment_token, payment_verified) {
    try {
  const response = await fetch(
    `${BASE_URL}/users/signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        email: email,
        password: password,
        first_name: first_name, 
        last_name: last_name, 
        billing_address: billing_address, 
        payment_token: payment_token, 
        payment_verified: payment_verified

      },
    })
  });
  const result = await response.json();
  if (response.headers.get('content-type') === 'application/json' && result.token) {
    console.log("Token:", result.token);
  } else {
    console.log("No token found in the response.");
  }

  console.log("Sign up successful", result)
  return result
} catch (error) {
  console.error("Error signing up", error);
}
}

//Log in
// export async function logInUser(user) {
//     const resp = await fetch(`${BASE_URL}/users/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
  
//     if (!resp.ok) {
//       // Handle login failure
//       return { success: false, error: "Invalid Login" };
//     }
  
//     const json = await resp.json();
//     console.log("Sign in successful", json)
//     return { success: true, user: json };
//   }

// users.js

export async function login(email, password) {
  try {
      const response = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              
                  email: email,
                  password: password
              
          })
      });
      const result = await response.json();
      console.log("result", result);
      
      if (response.ok) {
        
        const token = result.token;
        const user_id = result.user.user_id;

        console.log("token", token);
        console.log("user_id", user_id)

        // saving token to local storage
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user_id)
        console.log('local storage:', localStorage)
    }

      return result
      
  } catch (error) {
      console.error(error)
  }
}

//Update user
export async function updateUser(user_id, updatedUserData) {
    try {
        const response = await fetch(`${BASE_URL}/users/edit_profile/${user_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserData)
           
        });
        const result = await response.json();
        console.log("Profie updated", result);
        return result
    } catch (error) {
        console.error(error)
    }
  }

  //Log out 
  export async function logOut() {
    try {
      const response = await fetch(`${BASE_URL}/users/logout`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
      },
  
      });
      const result = await response.json();
      console.log("You have logged out", result);
      return result
    } catch (error) {
      console.error(error)
    }
  }
