import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = ()=> {
  let navigate = useNavigate();
  const { login } = useContext(AuthContext)
  const location = useLocation();

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [succes, setSucces] = useState('');
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    login(email, password)
    .then(result => {
      const loggedin = result.user;
      console.log(loggedin)
      setSucces('successfully logged in'); 
      navigate(from, { replace: true });
    }).catch((error) => {
      const errorMessage = error.message; 
      setError(errorMessage)
    })
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>Please Login</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      {succes && <p style={{color:'green'}}>{succes}</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      <p>Are u new here?<Link to='/register'>Register</Link></p>
    </form>
  );
}

export default Login;
