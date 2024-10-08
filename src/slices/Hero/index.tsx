'use client'

import { useRef, useEffect } from "react";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounds from "@/components/Bounds";
import ShuffleHeader from "@/components/ShuffleHeader";
import  BonFire  from '@/slices/Hero/BonFire';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  const component = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".letter-animation",{
      y: -400, opacity:0, rotate: 20
    },
    {
      y: 0, opacity: 1, rotate: 0, duration: 1.5, ease: "elastic.out(1,0,3)", transformOrigin: "left bottom", delay:0.4, stagger:{
        each:0.1,
        from: "random"
      }
    });
    
  }, {scope: component});

  const renderLetters = (name: KeyTextField, key: string) => {
    if(!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className={`letter-animation letter-animation-${key} inline-block opacity-1`}> 
        {letter}
      </span>
    ))
  }

  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
      className="flex flex-row"
    >
      <div className="grid min-h-[80vh] grid-cols-1 grid-rows-2 xl:grid-cols-4 justify-items-end lg:justify-items-center items-center"> 
        <div className="col-start-1 xl:col-start-2 lg:col-end-4 lg:row-span-2"> 
          <h1 className="mb-8 text-[clamp(2rem,22vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label={slice.primary.first_name + " " + slice.primary.last_name}>
            <span className="block text-chilli dark:text-lightchilli">
              {renderLetters(slice.primary.first_name, "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-300">
              {renderLetters(slice.primary.last_name, "first")}
            </span>
          </h1>
          <span className="block bg-gradient-to-tr from-indigo-400 dark:from-coolgray via-chilli dark:via-purple-200 to-red-300 dark:to-slate-600 bg-clip-text text-2xl gont-bold uppercase tracking-[.2em] text-transparent  md:text-4xl xl:px-6 xl:font-bold">
            <ShuffleHeader text={slice.primary.tag_line!} />
          </span>
        </div>
        <div className="row-start-2 xl:col-start-4">
            <BonFire />
        </div>
      </div>
    </Bounds>
  );
};

export default Hero;
