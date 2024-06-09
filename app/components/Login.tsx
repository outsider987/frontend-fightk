'use client';
import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "./Button";
import { useRouter } from 'next/router';

const LoginComponent = () => {

  const router  = useRouter()
  const   onGoogleLogin = () => {
    
    router.push('http://localhost:3000/auth/google')
  }
  return (
    <div className="bg-blue">
      <div className="m-auto flex"> K Moment</div>
      <div className="bg-white flex items-center justify-center">
        <div className="h-10 w-10">
          <AccountCircleIcon />
        </div>

        <Button onClick={onGoogleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default LoginComponent;