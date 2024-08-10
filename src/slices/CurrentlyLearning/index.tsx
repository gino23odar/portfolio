'use client'

import React, { useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import Circle from "@/components/Circle";

/**
 * Props for `LearningPage`.
 */
export type LearningPageProps = SliceComponentProps<Content.LearningPageSlice>;

/**
 * Component for "LearningPage" Slices.
 */
const LearningPage = ({ slice }: LearningPageProps): JSX.Element => {

  gsap.registerPlugin(ScrollTrigger);

  const component = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  const tl2 = useRef<gsap.core.Timeline>();
  const tl3 = useRef<gsap.core.Timeline>();

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

    tl.current.to(
      '.circle-container', 
      {
        rotate: -720,
    })
    
    tl3.current.to(
      '.huetext',
      {
        y: "100vw",
        color: "#fff"
      },
    )

    tl2.current.to(
      '.item', 
      {
        rotate: 360,
    })
    
  }, { scope: component });

  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-learning relative min-h-[90lvh] overflow-hidden"
      ref={component}
    >
      <div className="absolute top-10 justify-center items-center mx-8 xl:mx-16">
        <h1 className="huetext font-bold text-slate-900 bg-slate-50 bg-opacity-30 rounded-xl text-5xl md:text-7xl lg:text-9xl mb-20 p-2">
          {slice.primary.heading}
        </h1>
      </div>
      <div className="relative justify-center">
          <div className="flex justify-center" >
            <div className="" >
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
            </div>
          </div>
          <div className="min-h-[35lvh]">
            ''
          </div>
      </div>
    </Bounds>
  );
};

export default LearningPage;
