import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

function RegistrationForm() {

  const { createuserWithpass } = useContext(AuthContext)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
      <p>do u already have an account?<Link to='/login'>Login</Link></p>
    </form>
  );
}

export default RegistrationForm;
