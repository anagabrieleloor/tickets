import { useState } from "react";
import { registerUser } from "../api/users";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [billing_address, setBillingAddress] = useState("");

    const navigate = useNavigate();
    


    async function signUp(e) {
        e.preventDefault();
        
        try {
            const response = await registerUser(email, password, first_name, last_name, billing_address);
            setToken(response.user.token);
            console.log("response:", response);
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setBillingAddress("")
           
    

            navigate("/events");
            console.log("Response:", response);
            console.log("token maybe:", response.user.token)

        } catch (error) {
            console.error("try again bb", error);
        }
    }

    // const signUp = async (e) => {
    //     e.preventDefault();
    //     console.log(username, password);
    //     const response = await registerUser(username, password);
    //     // setToken(register.data.token);
    //     console.log(response);
    //     setUsername("");
    //     setPassword("");
    //     console.log("response:", response)
       
    // }

    return (
      
        <div className="register-container">
        <div className="register-card">
            <form onSubmit={signUp}>
                <h3>sign up</h3>


                <p>email:</p>
                <input
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <p>password:</p>
                <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <p>first name:</p>
            <input
                value={first_name}
                type="text"
                name="first name"
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <p>last name:</p>
            <input
                value={last_name}
                type="text"
                name="last name"
                placeholder="laste name"
                onChange={(e) => setLastName(e.target.value)}
            />
            <p>address:</p>
            <input
                value={billing_address}
                type="text"
                name="billing_address"
                placeholder="billing_address"
                onChange={(e) => setBillingAddress(e.target.value)}
            />
        
            <br />
              
               
            <button className="btn draw-border" type="submit">Submit</button>
            </form>
            
        </div>
        
        <Link to ="/">back to login</Link>
        </div>
    );
    
}