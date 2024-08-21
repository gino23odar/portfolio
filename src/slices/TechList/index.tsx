'use client'

import React, { useRef, useState } from "react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { MdOutlineUnfoldLessDouble } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight  } from "react-icons/md";

import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import SpecialButton from "@/components/SpecialButton";
import ShuffleHeader from "@/components/ShuffleHeader";

import pythonLogo from "../../../public/languages/python.svg";
import javascriptLogo from "../../../public/languages/javascript.svg";
import typescriptLogo from "../../../public/languages/typescript.svg";
import javaLogo from "../../../public/languages/java.svg";



/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList = ({ slice }: TechListProps): JSX.Element => {

  gsap.registerPlugin(ScrollTrigger);

  const [sql, setSql] = useState<boolean>(slice.primary.sqlbool)

  const component = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  const tl2 = useRef<gsap.core.Timeline>();

  useGSAP(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.current.fromTo(
        ".tech-row",
        {
          x: (index:number) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index:number) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );

      tl2.current = gsap.timeline({});

      tl2.current.fromTo(
        ".langlogo",
        {
          opacity: 0,
          scale: 1.4,
          rotation: (index:number) => {
            return index % 2 === 0 ? -30 : 30;
          }
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
      );
    }, { scope: component});


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounds as="div" className="w-auto">
        <Heading size="xl" className="mb-8 ml-12" as="h2">
          <ShuffleHeader text={slice.primary.heading!} />
        </Heading>
        <div className="flex flex-wrap justify-center space-x-4">  
          <div className="langlogo w-1/3 sm:w-1/5">
            <Image src={pythonLogo} alt='python'/>
          </div>
          <div className="langlogo w-1/3 sm:w-1/5">
            <Image src={javascriptLogo} alt='javascript'/>
          </div>
          <div className="langlogo w-1/3 sm:w-1/5">
            <Image src={typescriptLogo} alt='typescript' />
          </div>
          <div className="langlogo w-1/3 sm:w-1/5">
            <Image src={javaLogo} alt='java' />
          </div>
        </div>
      </Bounds>

      {slice.primary.techstack.map(({ color, name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={name || ""}
        >
          {Array.from({ length: 15 }, (_, idx) => (
            <React.Fragment key={idx}>
              <span
                className={
                  "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                  color: idx === 7 && color ? color : "inherit",
                }}
              >
                {name}
              </span>
              <span className="text-7xl rotate-90">
                <MdOutlineUnfoldLessDouble />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
      <div className="db">
        <Bounds className="flex">
          <Heading>{slice.primary.databases}</Heading>
          <div className="flex justify-center items-center gap-2">
            <p>SQL</p>
            <SpecialButton val={sql} setVal={setSql} />
            <p>NoSQL</p>
          </div>
          {sql ? 
            <div className="flex flex-wrap justify-center">
              {slice.primary.sql.map(({name, logo}, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <div key={index} className="w-1/4">
                    <PrismicNextImage field={logo} imgixParams={{q:90}} alt=''/>
                  <Heading as="h3" size='md'>{name}</Heading>
                  </div> 
                </div>
              ))}
            </div>
           : (
            <div className="flex flex-wrap justify-center">
              {slice.primary.nosql.map(({name, logo}, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <div className="w-1/4">
                    <PrismicNextImage field={logo} imgixParams={{q:90}} alt=''/>
                    <Heading as="h3" size='md'>{name}</Heading>
                  </div> 
                </div>
              ))}
            </div>
          )}
        </Bounds>
      </div>
      <div className="AI">
        <Bounds className="flex justify-center">
          <Heading as='h3' className="mb-6">{slice.primary.artificial_intelligence}</Heading>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl relative">
              <div className="hexagon-container -mb-10">
                <div className="hex-row">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
                <div className="hex-row">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
                <div className="hex-row">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
                <div className="hex-row">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
                <div className="hex-row">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
                <div className="hex-row">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
                <div className="hex-row">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
                
              </div>
            </div>
            <div className="absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-around pointer-events-none">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-4">
                <ul className="lg:w-80 lg:text-4xl font-bold text-gray-900 bg-white border border-gray-200 rounded-lg max-h-72 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                  {slice.primary.llms.map(({name}, index) => (
                    <li key={index} className="w-full px-4 py-2 border border-gray-200 first:rounded-t-lg last:rounded-b-lg [&:nth-child(3)]:border-b-2 [&:nth-child(3)]:border-b-black dark:border-gray-600">{name?.toUpperCase()}</li>
                  ))}
                </ul>
              </div>
              <>
                {slice.primary.ai_framework.map(({name, logo}, index) => (
                  <div className="flex items-center space-x-4" key={index}>
                    <p className="font-bold lg:text-4xl bg-slate-500 bg-opacity-70 p-1 rounded-lg">{name}</p>
                    <div className="w-32 h-32 md:w-40 md:h-40 xl:w-60 xl:h-60">
                      <PrismicNextImage field={logo} alt='' className="w-full h-full object-contain"/>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
        </Bounds>
      </div>
      <div className="other grid columns-1 sm:columns-2 justify-around mb-12">
        <div className="sm:col-start-1 mb-6">
          <Heading as='h4' size='md' className="mb-6">
            {slice.primary.deployment}
          </Heading>
          <div className="bg-slate-100 rounded-2xl border-8 border-black shadow-xl hover:shadow-slate-50">
            {slice.primary.services.map(({name,logo}, index) => (
              // <div className="banner relative overflow-hidden" key={index}>
              //   <p>{name}</p>
              //   <div className="shield absolute z-2">
              //       <div className="logostatic" style={{ background: `url(${sphere}), ${logo}` }}></div>
              //   </div>
              // </div>
              <div className="grid justify-center items-center gap-2" key={index}>
                {name == 'Vercel' ? <div className="col-start-1 h-32 xl:h-60 w-32 xl:w-60 pt-20">
                  <PrismicNextImage field={logo} alt='' className="object-contain drop-shadow-xl"/>
                </div> 
                : <><div className="col-start-1 h-32 xl:h-60 w-32 xl:w-60 p-2">
                  <PrismicNextImage field={logo} alt='' className="object-contain drop-shadow-xl"/>
                  </div>
                  <p className="col-start-2 font-bold sm:text-2xl lg:text-5xl text-midnightblue">{name}</p></>}
              </div>
            ))}
          </div>
        </div>
        <div className="sm:col-start-2 mb-6">
          <Heading as='h4' size='md' className="mb-6">
            {slice.primary.currently}
          </Heading>
          <div className="flex flex-col justify-center bg-slate-100 rounded-2xl border-8 border-black shadow-xl hover:shadow-slate-50">
            {slice.primary.tech.map(({name,logo,description}, index) => (
              <div className="grid rows-2 justify-center items-center gap-2 text-midnightblue" key={index}>
                <div className="col-start-1 h-32 xl:h-60 w-32 xl:w-60 p-2">
                  <PrismicNextImage field={logo} alt='' className="object-contain drop-shadow-xl"/>
                </div>
                <p className="col-start-2 font-bold sm:text-2xl lg:text-5xl">{name}</p>
                <div className="flex justify-end text-md lg:text-xl xl:text-2xl">
                  <PrismicRichText field={description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechList;
