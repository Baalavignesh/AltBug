import React, { useState, useEffect } from "react";
import { TextField, Typography } from "@mui/material";

import '../styles/index.css'

function Presence({passBottom}){
    const [website, setWebsite] = useState('')
    const [url, setUrl] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        passBottom({website:website, url: url, password: password})
    },[website,url,password])

    return (
        <div className="presenceSection">
            <div className='inputSection'>
            <Typography className='inputHead'>Personal Website</Typography>
            <TextField className='textField' helperText='Your homepage, blog or company site.' size='small' variant='outlined' value={website} onChange={(event)=>setWebsite(event.target.value)}/> 
            </div>
            <div className="bottomInputs">
                <div className='bottomInputField'>
                <Typography className='inputHead'>Portfolio URL</Typography>
                <TextField className='textField' helperText='Only shared with potential employers' size='small' variant='outlined' value={url} onChange={(event)=>setUrl(event.target.value)}/> 
                </div>
                <div className='bottomInputField'>
                <Typography className='inputHead'>Portfolio password</Typography>
                <TextField className='textField' helperText='Only if needed' size='small' variant='outlined' value={password} onChange={(event)=>setPassword(event.target.value)}/> 
                </div>
            </div>
        </div>
    )
}

export default Presence;