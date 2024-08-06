import React from 'react';
import { createClient } from '@/prismicio';
import NavBar from '@/components/NavBar';



export default async function Header(){
    const client = createClient();
    const settings = await client.getSingle('settings');

  return (
    <header className='absolute top-[5lvh] left-0 z-50 mx-auto max-w-7xl'>
        <NavBar settings={settings} />
    </header>
  )
}