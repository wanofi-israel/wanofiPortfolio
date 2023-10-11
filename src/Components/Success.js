import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
export default function Success(){
    const navigate=useNavigate()
    const returnHome=()=>{
        navigate('/')
    }
    return(
        <div className="succes_page">
            <div className="success_message-container">
                <h2 className='succes-message'>Email sent successfuly</h2>
                <p className='return' onClick={returnHome}><ArrowBackIcon/> Return to Home</p>
            </div>
        </div>
    )
}