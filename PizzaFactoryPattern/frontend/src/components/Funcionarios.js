import React from 'react';
import Image from 'next/image';

const Funcionarios = () => {
  return (
    <div className='pt-8 px-16'>
      <h1 className='text-3xl font-bold mb-8'>Funcionarios</h1>
      <div className='flex flex-col gap-4'>
        <article className='flex gap-4 items-center mb-8 ml-8'>
          <Image
            src={'/assets/pedro.jpeg'}
            width={'75px'}
            height={'75px'}
            className={'rounded-full'}
          />
          <div>
            <h2 className='text-2xl'>Pedro</h2>
            <h3 className='text-xl'>RM84591</h3>
          </div>
        </article>
        <article className='flex gap-4 items-center mb-8 ml-8'>
          <Image
            src={'/assets/eduardo.jpeg'}
            width={'75px'}
            height={'75px'}
            className={'rounded-full'}
          />
          <div>
            <h2 className='text-2xl'>Eduardo</h2>
            <h3 className='text-xl'>RM86407</h3>
          </div>
        </article>
        <article className='flex gap-4 items-center mb-8 ml-8'>
          <Image
            src={'/assets/matheus.jpeg'}
            width={'75px'}
            height={'75px'}
            className={'rounded-full'}
          />
          <div>
            <h2 className='text-2xl'>Matheus</h2>
            <h3 className='text-xl'>RM85695</h3>
          </div>
        </article>
        <article className='flex gap-4 items-center mb-8 ml-8'>
          <Image
            src={'/assets/anissa.jpeg'}
            width={'75px'}
            height={'75px'}
            className={'rounded-full'}
          />
          <div>
            <h2 className='text-2xl'>Anissa</h2>
            <h3 className='text-xl'>RM86478</h3>
          </div>
        </article>
        <article className='flex gap-4 items-center mb-8 ml-8'>
          <Image
            src={'/assets/stella.jpg'}
            width={'75px'}
            height={'75px'}
            className={'rounded-full'}
          />
          <div>
            <h2 className='text-2xl'>Stella</h2>
            <h3 className='text-xl'>RM85683</h3>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Funcionarios;