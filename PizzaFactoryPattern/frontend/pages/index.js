import React, {useEffect} from 'react';
import Login from '../src/components/Login';
import {useForm} from 'react-hook-form';


const LoginPage = () => {

  const {register, handleSubmit, reset} = useForm();

  const handleSignIn = async (data) => {
    console.log('d');
  };


  return (
    <>
      <Login register={register} handleSignIn={handleSubmit(handleSignIn)} />
    </>
  );
};

export default LoginPage;;