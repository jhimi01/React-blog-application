import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function RegistrationForm() {

  const { createuserWithpass } = useContext(AuthContext)

  const [name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [succes, setSucces] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password)

    // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    //   setError('Minimum eight characters,one number and at least one letter:')
    //   return;
    // }
    console.log(name, email, password)
    
    createuserWithpass(name, email, password)
    .then(result => {
      // form.reset();
      const signup = result.user;
      console.log(signup)
      setSucces('registerd successfully')
      setError('')
    }).catch(err => {
      setError(err.message)
      setSucces('')
    });
    
  };
  const handleshow=()=>{
    setShow(!show)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Name:</label>
        <input type="text" id="Name" value={name} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type={show ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <p style={{cursor: 'pointer'}} onClick={handleshow}>{show ? 'hidepassord' : 'showpassword'}</p>
      </div>
      <button type="submit">Register</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {succes && <p style={{color: 'green'}}>{succes}</p>}
      <p>do u already have an account?<Link to='/login'>Login</Link></p>
    </form>
  );
}

export default RegistrationForm;
