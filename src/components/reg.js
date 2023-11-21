import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from "react"
import { Paper } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import './reg.css'
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Register() {
  
  const[visited,setVisited]=useState(true);
         const[type,setType]=useState("password")

  const handleClickPassword=()=>
  {
    if(type==="password")
    {
      setType("text");
      setVisited(true);
    }
    else{
     setType("password");
     setVisited(false);
    }

 
  }
  return (
   
    <div className="reg">
      <div className="d">
     <div className='regu' style={{width:"300px",height:"600px"}}>
      <div>
      <h2>Welcome Back!</h2>
      <pre>To Keep connected with us please</pre>
      <pre>login with your personal info.</pre>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{width:"150px",borderRadius:"15px",color:"white",backgroundColor:"#00A9FF"}}
              sx={{ mt: 3, mb: 2 }}
              href='/login'
            >SIGN IN</Button>
     </div>
     </div>
    <div className="regi" style={{width:"450px",height:"600px"}}>
      <Container component="main" maxWidth="xs">
        
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
        <form style={{ width: '100%', marginTop: '0px' }}>
          <Typography component="h1" variant="h5"  sx={{mt:"30px",color:"#673e07"}}>
            <b>Register</b>
          </Typography>
          <div className='ic'>
            <div><FacebookIcon/></div>
            <div><GoogleIcon/></div>
            <div><LinkedInIcon/></div>
          </div>
          <TextField
            className='name'
            margin='normal'
          placeholder="FirstName"
          style={{backgroundColor:'#acb1ba',width:"250px",borderRadius:"25px"}}
          InputProps={{
            sx: { color: 'white', borderRadius: '25px' },

              startAdornment: (
              <InputAdornment position="start">
                <PersonIcon className="icon" />
              </InputAdornment>
            ),
        }}
        />
          <TextField
            className='name'
            margin='normal'
          placeholder="Lastname"
          style={{backgroundColor:'#acb1ba',width:"250px",borderRadius:"25px"}}
          InputProps={{
            sx: { color: 'white', borderRadius: '25px' },

              startAdornment: (
              <InputAdornment position="start">
                <PersonIcon className="icon" />
              </InputAdornment>
            ),
        }}
        />
            <TextField
            className='name'
          placeholder="Email"
          margin='normal'
          style={{backgroundColor:'#acb1ba',width:"250px",borderRadius:"25px"}}
          InputProps={{
            sx: { color: 'white', borderRadius: '25px' },

              startAdornment: (
              <InputAdornment position="start">
                <EmailIcon className="icon" />
              </InputAdornment>
            ),
        }}
        />
           
           <TextField
    placeholder="Password"
    margin='normal'
    style={{borderRadius:"25px",width:"250px",backgroundColor:"#acb1ba"}}
    type={type}
    InputProps={{
      sx: { color: 'white', borderRadius: '25px' },

      startAdornment: (
        <InputAdornment position="start">
                <IconButton
                    onClick={
                        handleClickPassword
                    }
                    
                >
                    {visited ? (
                        <VisibilityIcon/>
                    ) : (
                        <VisibilityOffIcon />
                    )}
                </IconButton>
            </InputAdornment>
      ),
    }}
    /> 
           <TextField
    placeholder="Confirm Password"
    margin='normal'
    style={{borderRadius:"25px",width:"250px",backgroundColor:"#acb1ba"}}
    type={type}
    InputProps={{
      sx: { color: 'white', borderRadius: '25px' },

      startAdornment: (
        <InputAdornment position="start">
                <IconButton
                    onClick={
                        handleClickPassword
                    }
                    
                >
                    {visited ? (
                        <VisibilityIcon/>
                    ) : (
                        <VisibilityOffIcon />
                    )}
                </IconButton>
            </InputAdornment>
      ),
    }}
    /> 
            
            <Button
              type="submit"
              fullWidth
              
              variant="contained"
              style={{width:"150px",borderRadius:"25px",color:"white",backgroundColor:"#00A9FF"}}
              sx={{ mt: 3, mb: 2 }}
            >SIGN UP</Button>
            
        </form>
      </div>
    </Container>
      </div>
      </div>
      </div>
      
      
      
      
  );
}
