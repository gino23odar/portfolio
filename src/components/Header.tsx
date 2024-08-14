import React from 'react';
import { createClient } from '@/prismicio';
import NavBar from '@/components/NavBar';



export default async function Header(){
    const client = createClient();
    const settings = await client.getSingle('settings');

  return (
    <header className='fixed top-10 left-0 z-50 h-auto w-[100px]'>
        <NavBar settings={settings} />
    </header>
  )
}