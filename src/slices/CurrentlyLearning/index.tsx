'use client'

import React, { useRef, useEffect } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import Circle from "@/components/Circle";
import mist1 from "../../../public/mistcloud.png";
import mist2 from "../../../public/mistleft.png";
import splashzone from "../../../public/splashzone.png";
import waterslash from "../../../public/waterslash.png";

/**
 * Props for `LearningPage`.
 */
export type LearningPageProps = SliceComponentProps<Content.LearningPageSlice>;

/**
 * Component for "LearningPage" Slices.
 */
const LearningPage = ({ slice }: LearningPageProps): JSX.Element => {

  gsap.registerPlugin(ScrollTrigger);

  const [mediaCheck, setMediaCheck] = React.useState<boolean>(true);

  const component = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  const tl2 = useRef<gsap.core.Timeline>();
  const tl3 = useRef<gsap.core.Timeline>();
  const tl4 = useRef<gsap.core.Timeline>();
  const tl5 = useRef<gsap.core.Timeline>();

  useEffect(() =>{

    const mediaQueryW = window.matchMedia("(max-width: 550px)");
    const mediaQueryH = window.matchMedia("(max-height: 500px)");

    if (mediaQueryW.matches || mediaQueryH.matches) {
      setMediaCheck(false);
    }

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (mediaQueryW.matches || mediaQueryH.matches) {
        setMediaCheck(true);
      } else {
        setMediaCheck(false);
      }
    }
    mediaQueryW.addEventListener('change', handleMediaChange);
    mediaQueryH.addEventListener('change', handleMediaChange);

    return () =>{
      mediaQueryW.removeEventListener('change', handleMediaChange);
      mediaQueryH.removeEventListener('change', handleMediaChange);
    }
  }, [])

  useGSAP(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });
  
      tl2.current = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl3.current = gsap.timeline({
        scrollTrigger: {
          trigger:'body',
          start: "top top",
          end: "+=1000",
          scrub: 0.5,
        },
      });

      tl4.current = gsap.timeline({
        scrollTrigger: {
          trigger:'body',
          start: "top top",
          end: "+=1000",
          scrub: 0.5,
        },
      });

      tl.current.to(
        '.circle-container', 
        {
          rotate: -720,
      }),

      tl2.current.to(
        '.item', 
        {
          rotate: 360,
      })

      tl3.current.to(
        '.huetext',
        {
          y: "100vw",
          color: "#fff"
        },
      )

      tl4.current.fromTo(
        '.cloud',
        {
          y:"20vw"
        },
        {
          y:"-60vh",
          opacity: 0
        }
      )

      .fromTo(
        '.splash',
        {
          opacity: 0,
          y:"20vh"
        },
        {
          opacity: 0.8,
          y:"5vh",
          scale: 1.5,
        }
      )

      
    
  }, { scope: component });

  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-learning w-full relative min-h-[90lvh] overflow-hidden"
      ref={component}
    >
      <div className="absolute top-10 justify-center items-center mx-8 xl:mx-16">
        <h1 className="huetext font-bold text-slate-900 bg-slate-50 bg-opacity-30 rounded-xl text-5xl md:text-7xl lg:text-9xl mb-20 p-2">
          {slice.primary.heading}
        </h1>
      </div>
      <div className="relative justify-center">
          <div className="flex justify-center z-20" >
            {mediaCheck ? (
              <Circle >
              {slice.primary.currentlylearning.map(({ name, logo }, index) => (
                <div className="item flex flex-col p-8" key={index}>
                  <div className="flex opacity-100">
                    <PrismicNextImage field={logo} alt=''/>
                  </div>
                  <p className="text-xl font-bold text-slate-100 dark:text-slate-800">
                    {name}
                  </p>
                </div>
              ))}
            </Circle>
            ) : (
              <div className="flex flex-col translate-y-[20vh]">
                {slice.primary.currentlylearning.map(({ name, logo }, index) => (
                  <div className="flex flex-col p-8" key={index}>
                    <div className="flex opacity-100">
                      <PrismicNextImage field={logo} alt=''/>
                    </div>
                    <p className="text-xl font-bold text-slate-100 dark:text-slate-800">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="min-h-[20lvh]">
            ''
          </div>
      </div>
      { mediaCheck && 
        <img src={mist1.src} alt='' className="cloud absolute top-[200px] sm:top-0 left-0 w-full h-full object-contain" />
      }
      {mediaCheck && (<div className="relative w-full min-h-[25lvh]">
        <img src={splashzone.src} alt='' className="splash absolute sm:top-0 left-0 w-full h-full object-cover translate-y-2/3" />
      </div>)}
    </Bounds>
  );
};

export default LearningPage;
