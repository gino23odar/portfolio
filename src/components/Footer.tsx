import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from "@prismicio/next";
import { isFilled } from '@prismicio/client';

import Link from "next/link";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import { CgCode , CgCodeSlash } from "react-icons/cg";


async function Footer(){
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div className='min-h-[5vh] bg-slate-950 bg-opacity-25 mt-auto'>
        <div className='flex flex-wrap justify-between p-4'>
          <div className="flex items-center gap-2">
            <CgCode className='text-2xl'/>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-chilli"
            >
              {settings.data.name}
            </Link>
            <CgCodeSlash className='text-2xl'/>
          </div>
          <div className="flex items-center justify-center">
            <p className=" text-lg text-slate-300 ">
                © {new Date().getFullYear()} {settings.data.name}
            </p>
          </div>
          <div className="inline-flex justify-center items-center gap-4">
            {isFilled.link(settings.data.github_link) && (
              <PrismicNextLink
                field={settings.data.github_link}
                className="text-xl xl:text-2xl text-slate-300 transition-all duration-200 hover:text-chilli hover:scale-150"
              >
                <SiGithub />
              </PrismicNextLink>
            )}
            {isFilled.link(settings.data.linkedin_link) && (
              <PrismicNextLink
                field={settings.data.linkedin_link}
                className="text-xl xl:text-2xl text-slate-300 transition-all duration-200 hover:text-chilli hover:scale-150"
              >
                <SiLinkedin />
              </PrismicNextLink>
            )}
            {isFilled.link(settings.data.leetcode_link) && (
              <PrismicNextLink
                field={settings.data.leetcode_link}
                className="text-xl xl:text-2xl text-slate-300 transition-all duration-200 hover:text-chilli hover:scale-150"
              >
                <SiLeetcode />
              </PrismicNextLink>
            )}
          </div>
        </div>
    </div>
  )
}

export default Footer