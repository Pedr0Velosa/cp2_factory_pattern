import React from 'react';
import {CiPizza} from 'react-icons/ci';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Login = ({register}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="absolute inset-0 z-30 flex items-center justify-center min-h-screen bg-gray-500 w-max-">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <div className="flex justify-center">
            <CiPizza size={'5em'} />
          </div>
          <h3 className="text-2xl font-bold text-center">Faça login com a sua conta</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="Usuario">Usuario</label>
                <input
                  {...register('usuario')}
                  type="text"
                  placeholder="Seu usuario"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Senha</label>
                <input
                  type="password"
                  placeholder="Sua senha"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register('password')}
                  required
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button type='submit' className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" >Entrar</button>
                <Link href={'/'} passHref>
                  <a className="text-sm text-blue-600 hover:underline">Esquece a senha?</a>
                </Link>
              </div>
            </div>
          </form>
        </div >
      </div >
    </>
  );
};

export default Login;