import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

async function Footer(){
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div className='min-h-[5vh] bg-slate-950 bg-opacity-25 mt-auto'>
        <div className='flex flex-wrap justify-between p-4'>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-chilli"
            >
              {settings.data.name}
            </Link>
            <p>|</p>
            <p className=" text-lg text-slate-300 ">
              © {new Date().getFullYear()} {settings.data.name}
            </p>
          </div>
          <p>things2</p>
        </div>
    </div>
  )
}

export default Footer