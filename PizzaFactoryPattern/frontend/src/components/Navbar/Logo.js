import React from 'react';
import {CiPizza} from 'react-icons/ci';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Link href="/dashboard" passHref>
        <a className="flex items-center">
          <CiPizza className="mr-3 h-6 sm:h-9" size={'4em'} />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fiap's Pizza</span>
        </a>
      </Link>
    </>
  );
};

export default Logo;