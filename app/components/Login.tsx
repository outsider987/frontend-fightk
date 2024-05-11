'use client';
import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "./Button";

const LoginComponent = () => {
  return (
    <div className="bg-blue">
      <div className="m-auto flex"> K Moment</div>
      <div className="bg-white flex items-center justify-center">
        <div className="h-10 w-10">
          <AccountCircleIcon />
        </div>

        <Button>Login</Button>
      </div>
    </div>
  );
};

export default LoginComponent;