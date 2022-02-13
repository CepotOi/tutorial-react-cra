import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Email or password is empty');
      return;
    }

    return navigate('/dashboard');
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" id="email" onChange={inputEmail} />
        <br />
        <label>Password</label>
        <input type="password" name="password" id="password" onChange={inputPassword} />
        <br />
        <button type="submit" className="btn">Login</button>
      </form>
    </>
  );
}