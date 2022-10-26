import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {TbDashboard} from 'react-icons/tb';
import {FaPeopleCarry} from 'react-icons/fa';

const Itens = () => {

  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <li>
        <Link href="/dashboard" passHref>
          <a
            className={`${path === '/dashboard' ? 'inline-flex py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' :
              'inline-flex py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`
            }
          >
            <TbDashboard className='mr-4' size={'1.5em'} />
            Dashboard
          </a>
        </Link>
      </li>
      <li>
        <Link href="/funcionarios" passHref>
          <a
            className={`${path === '/funcionarios' ? 'inline-flex py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' :
              'inline-flex py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`
            }
          >
            <FaPeopleCarry className='mr-4' size={'1.5em'} />
            Funcionarios
          </a>
        </Link>
      </li>
    </>
  );
};

export default Itens;
