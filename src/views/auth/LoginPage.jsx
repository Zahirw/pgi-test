import React from 'react'
import { Card } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className='container h-screen flex justify-center items-center'>
      <Card className='h-2/6 w-4/12 text-center'>
        <h1 className='text-center text-2xl p-5'>WELCOME</h1>
        <h1 className='text-center text-lg p-5 mt-10'>Please Login with your google account</h1>
        <div className='flex justify-center'>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              navigate('home')
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </Card>
    </div>
  )
}

export default LoginPage