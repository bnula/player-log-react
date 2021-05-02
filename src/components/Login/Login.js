import React, { useState } from "react";
import propTypes from "prop-types";
import "./Login.css";

async function loginUser(credentials) {
   return (
      fetch("https://enigmatic-reaches-86995.herokuapp.com/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(credentials)
      })
      .then(data => data.json())
   )
}

function Login({ setToken }) {
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
         email,
         password
      });
      setToken(token);
   }

   return (
      <div className="login">
         <h1>Please Log In</h1>
         <form onSubmit={handleSubmit}>
            <label>
               <p>Username</p>
               <input type="text" onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
               <p>Password</p>
               <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
               <button type="submit">Submit</button>
            </div>
         </form>
      </div>
   );
}

Login.propTypes = {
   setToken: propTypes.func.isRequired
}

export default Login;