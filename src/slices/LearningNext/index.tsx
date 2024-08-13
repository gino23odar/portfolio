'use client'

import React, { useEffect, useRef } from "react";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounds from "@/components/Bounds";
import ImageSlider from "@/components/ImageSlider";
import droplets from "../../../public/droplets1.png";

/**
 * Props for `LearningNext`.
 */
export type LearningNextProps = SliceComponentProps<Content.LearningNextSlice>;

/**
 * Component for "LearningNext" Slices.
 */
const LearningNext = ({ slice }: LearningNextProps): JSX.Element => {

  gsap.registerPlugin(ScrollTrigger);

  const [mediaCheck, setMediaCheck] = React.useState<boolean>(true);

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

  const component = useRef<HTMLDivElement>(null);
  const tlx = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    tlx.current = gsap.timeline({
      scrollTrigger: {
        trigger: component.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      },
    });

    tlx.current.to('.droplets', {
      opacity: 0.3,
      y: "-30vh",
    });


  }, { scope: component});

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="bg-ocean md:min-h-[150lvh]">
        <div className="sticky top-10 justify-center items-center mx-8 xl:mx-16">
          <h1 className="huetext font-bold text-slate-900 bg-slate-50 bg-opacity-30 rounded-xl text-5xl md:text-7xl lg:text-9xl mb-20 p-2">
            {slice.primary.heading}
          </h1>
        </div>
        {mediaCheck && <div className="flex droplets overflow-hidden">
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
        </div>}
        
        <div className="slider">
          <ImageSlider >
            {slice.primary.software.map(({name, logo, related, related_logo}, index) => (
              <div key={index}>
                <div className="relative flex flex-col rounded-2xl overflow-hidden">
                  <PrismicNextImage field={logo} className="w-full object-cover rounded-2xl"/>
                  <div className="absolute flex justify-center w-1/5 h-1/4 rounded-xl right-0 top-[70%] overflow-hidden mr-2">
                      <PrismicNextImage field={related_logo} alt='' className="object-cover"/>
                  </div>
                  <h2 className="absolute left-0 ml-12 top-5 lg:text-xl bg-slate-800 bg-opacity-50 font-bold rounded-xl p-2">{related}</h2>
                </div>
              </div>
            ))}
          </ImageSlider >
        </div>
      </div>
    </section>
  );
};

export default LearningNext;
