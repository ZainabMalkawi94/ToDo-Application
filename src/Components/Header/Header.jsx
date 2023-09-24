import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { LoginContext } from '../../Context/Auth/authContext';
import  { useContext } from 'react';


export default function Header() {
  const { loggedIn, logout } = useContext(LoginContext);
    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                My To-Do List
              </Link>
            </Typography>
            {loggedIn ? (
              <>
                <Link
                  to="/settings"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Settings
                </Link>
                <button onClick={logout} style={{ color: 'inherit' }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Sign Up
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  