import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import TextField from '@mui/material/TextField';
import { LoginContext } from '../../Context/Auth/authContext';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "../SignUp/signup.css";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(LoginContext);

    function handleChange(e) {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Check if both username and password are filled
        if (username && password) {
            login(username, password);
        } else {
            // Display an error message or prevent form submission
            console.error('Username and password are required');
        }
    }


    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="signup-title">Login</h2>
                <form onSubmit={handleSubmit}>


                    <div className='signup-input'>
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            name="username"
                            type="test"
                            required
                            id="outlined-basic" label="Username" variant="outlined"
                        />
                    </div>
                    <div className='signup-input'>
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            name="password"
                            type="password"
                            required
                            id="outlined-basic" label="Password" variant="outlined"
                        />


                    </div>
                    <div>
                        
                            <Link to="/todo" className="signup-button" style={{ textDecoration: 'none', color: 'inherit' }}>
                               
                            <button type="submit" className="signup-button">
                                Login
                            </button>
                            </Link>
                       
                    </div>
                </form>
                <button onClick={() => navigate('/signup')} className="back-to-login">
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Login;



