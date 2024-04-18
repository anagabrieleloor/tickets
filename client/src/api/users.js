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
