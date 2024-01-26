import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import './App.css'
import { useState } from 'react';

function App() {
 const [user,setUser]=useState({})

//  const logout=()=>{
//     setUser({})
//     document.getElementById('login').hidden=false
//  }

  return (
    <>
     <div id="login">
     <div className="caard">
     <h3>Please Login</h3>
      <div><input type="text" placeholder='Username' /></div>
      <div><input type="password" placeholder='Password' /></div>
      <div><button>Login</button></div>
      <GoogleOAuthProvider clientId="581786642524-5jnhmai4pcs7q0q94q9iuk661hrgco5i.apps.googleusercontent.com">
      <GoogleLogin
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse.credential);
            setUser(decoded)
            document.getElementById('login').hidden=true
          console.log(decoded);
          }}
          onError={() => {
          console.log('Login Failed');
          }}
          />

        </GoogleOAuthProvider>
     </div>
     </div>
           {user && <div>
            <img src={user.picture} alt="" />
            <h2> {user.name}</h2>
            <p>{user.email}</p>
            </div>}
    </>
  )
}

export default App
