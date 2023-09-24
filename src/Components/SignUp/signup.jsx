import  { useState } from 'react';
import request from 'superagent';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './signup.css';
import TextField from '@mui/material/TextField';

function Signup() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await request
        .post('https://todo-api-l31x.onrender.com/signup')
        .send(formData);

      console.log('Signup successful', response.body);

      navigate('/'); 

    } catch (error) {
      console.error('Signup error', error.response ? error.response.body : error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
       
          
          <div className='signup-input'>
          <TextField
            fullWidth
            onChange={handleChange}
            name="text"
            type="test"
            required
            id="outlined-basic" label="username" variant="outlined"
          />
    </div>
    <div className='signup-input'>
          <TextField
            fullWidth
            onChange={handleChange}
            name="text"
            type="password"
            required
            id="outlined-basic" label="Password" variant="outlined"
          />
    
        
          </div>
          <div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </form>
        <button onClick={() => navigate('/')} className="back-to-login">
         Back to Login
        </button>
      </div>
    </div>
  );
}

export default Signup;