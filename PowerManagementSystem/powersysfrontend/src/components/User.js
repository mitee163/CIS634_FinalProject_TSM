import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function User() {
    const paperStyle={padding:"50px 20px",width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[address,setAddress]=useState('')
    const handleClick=(e)=>{
      e.preventDefault()
      const user={name,email,password,address}
      console.log(user)
      fetch("http://localhost:8080/user/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("New user added")
    })
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>User Registration</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        
        <TextField id="Name" label="Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)} />
        <TextField id="Email" label="Email" variant="outlined" fullWidth value={email} onChange={(e)=>setEmail(e.target.value)} />
        <TextField id="Password" label="Password" variant="outlined" fullWidth value={password} onChange={(e)=>setPassword(e.target.value)} />
        <TextField id="Address" label="Address" variant="outlined" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)}/>
<Button variant="contained" onClick={handleClick}>Submit</Button>
    </Box>
    {name}
    {email}
    {password}
    {address}
    </Paper>
    </Container>
  );
}
