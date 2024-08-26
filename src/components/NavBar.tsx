"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { MdMenu, MdClose, MdLinearScale, MdWorkOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { LuBookOpen } from "react-icons/lu";
import { BiBookmarks } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi2";

import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

import { useRouter } from 'next/navigation';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function NavBar({
  settings,
}: {
  settings: Content.SettingsDocument;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  

  return (
    <nav aria-label="Main navigation" className="overflow-hidden">
      <ul className="flex flex-col justify-between rounded-r-lg bg-slate-50 bg-opacity-85 px-2 py-2 md:items-center md:rounded-r-xl">
        <div className="flex flex-col items-center justify-between">
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
          <NameLogo name={settings.data.name} />
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-900 dark:bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out ",
            open ? "translate-x-0" : "translate-x-[-100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl dark:text-slate-800 text-slate-50"
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {settings.data.nav_item.map(({ link, label }, index) => (
            <React.Fragment key={label}>
              <li className="first:mt-8">
                <PrismicNextLink
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold dark:text-slate-900 text-slate-50",
                  )}
                  field={link}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes(asLink(link) as string)
                        ? "translate-y-6"
                        : "translate-y-18",
                    )}
                  />
                  <span className="relative">{label}</span>
                </PrismicNextLink>
              </li>
              {index < settings.data.nav_item.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 sm:inline"
                  aria-hidden="true"
                >
                  ---
                </span>
              )}
            </React.Fragment>
          ))}
          <li>
            
          <button
            //linkField={settings.data.cta_link}
            onClick={() => router.push('/contact')}
            className="text-black"
          >
            {settings.data.cta_label}
          </button>    
            
          </li>
          <ThemeToggle />
        </div>
        <DesktopMenu settings={settings} pathname={pathname} router={router} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: KeyTextField }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
        <div className="relative flex items-center justify-center gap-2 group my-8">
            <IoHomeOutline />
            <p className="absolute top-8 pt-1 hidden group-hover:inline">home</p>
        </div>
    </Link>
  );
}

function DesktopMenu({
  settings,
  pathname,
  router
}: {
  settings: Content.SettingsDocument;
  pathname: string;
  router: AppRouterInstance;
}) {

  const [active, setActive] = useState<string|null>(null);

  let iconRouter = {
    'About': <FaRegUserCircle />,
    'TechStack': <GoStack  />,
    'Learning': <LuBookOpen  />,
    'Blog': <BiBookmarks />,
    'Projects': <MdWorkOutline />,
    'E&E': <HiOutlineAcademicCap />,
  }


  return (
    <div className="relative z-2 hidden flex-col justify-around items-center gap-1 min-h-[75lvh] bg-transparent py-8 xl:flex">
      
      {settings.data.nav_item.map(({ link, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <PrismicNextLink
              className={clsx(
                "group relative block overflow-hidden0 rounded px-3 py-1 text-base font-bold text-slate-900",
              )}
              field={link}
              aria-current={
                pathname.includes(asLink(link) as string) ? "page" : undefined
              }
              onClick={() => setActive(label)}
            >
              <span
                className={clsx(
                  `absolute inset-0 z-0 h-full rounded-full bg-regblue transition-transform  duration-300 ease-in-out  group-hover:translate-x-0 ${active == label? 'translate-x-16 bg-chilli' : ''}`,
                  pathname.includes(asLink(link) as string)
                    ? "translate-x-24"
                    : "translate-x-24",
                )}
              />
              <div className="flex flex-col items-center justify-center p-2 group-hover:p-0">
                <span className="relative text-2xl">{iconRouter[label as keyof typeof iconRouter]}</span>
                <span className={`hidden z-10 group-hover:inline ${active == label? 'inline' : ''}`}>{label}</span>
              </div>
            </PrismicNextLink>
          </li>
          {index < settings.data.nav_item.length - 1 && (
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              <MdLinearScale />
            </span>
          )}
        </React.Fragment>
      ))}
      <button
          //linkField={settings.data.cta_link}
          id="resume-modal"
          onClick={() => router.push('/contact')}
          className="text-black bg-coolgray"
        >
          {settings.data.cta_label}
        </button> 
    </div>
  );
}