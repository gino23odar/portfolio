'use client'

import React, { useEffect, useRef, useState } from "react";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Canvas } from "@react-three/fiber";

import Bounds from "@/components/Bounds";
import ImageSlider from "@/components/ImageSlider";
import ShuffleHeader from "@/components/ShuffleHeader";
import droplets from "../../../public/droplets1.png";
import ScubaAnimation from "@/components/ScubaAnimation";

/**
 * Props for `LearningNext`.
 */
export type LearningNextProps = SliceComponentProps<Content.LearningNextSlice>;

/**
 * Component for "LearningNext" Slices.
 */
const LearningNext = ({ slice }: LearningNextProps): JSX.Element => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isMouseOutside, setIsMouseOutside] = React.useState<boolean>(false);
  const [mediaCheck, setMediaCheck] = React.useState<boolean>(true);
  const component = useRef<HTMLDivElement>(null);
  const tlx = useRef<gsap.core.Timeline>();

  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() =>{

    const mediaQueryW = window.matchMedia("(max-width: 550px)");
    const mediaQueryH = window.matchMedia("(max-height: 500px)");

    if (mediaQueryW.matches || mediaQueryH.matches) {
      setMediaCheck(false);
    }

    const handleMediaChange = () => {
      setMediaCheck(!mediaQueryW.matches && !mediaQueryH.matches);
    };

    mediaQueryW.addEventListener('change', handleMediaChange);
    mediaQueryH.addEventListener('change', handleMediaChange);
    handleMediaChange();

    return () =>{
      mediaQueryW.removeEventListener('change', handleMediaChange);
      mediaQueryH.removeEventListener('change', handleMediaChange);
    }
  }, [])

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

  const handleMouseEnter = () => {
    setIsMouseOutside(false);
  };

  const handleMouseLeave = () => {
    setIsMouseOutside(true);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseOutside) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseOutside]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
      className="relative"
    >
      <div className="bg-ocean md:min-h-[150lvh]">
        <div className="sticky top-10 justify-center items-center mx-8 xl:mx-16">
          <h1 ref={headerRef} className="huetext font-bold text-slate-900 bg-slate-50 bg-opacity-30 rounded-xl text-5xl md:text-7xl lg:text-9xl mb-20 -mt-2 p-2 sm:px-20 md:px-30">
            {isVisible && <ShuffleHeader text={slice.primary.heading!} />}
          </h1>
        </div>
        {mediaCheck && <div className="flex droplets overflow-hidden">
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
          <img src={droplets.src} className=" bottom-0 left-0 object-center" alt="" />
        </div>}
        {/* <div className="min-h-[20lvh]">
          <Canvas camera={{position: [3,0,0.01]}}>
            <ScubaAnimation />
          </Canvas>
        </div> */}
        <div className="slider">
          <ImageSlider >
            {slice.primary.software.map(({name, logo, related, related_logo}, index) => (
              <div key={index}>
                <div className="relative flex flex-col rounded-2xl overflow-hidden">
                  <PrismicNextImage field={logo} className="w-full object-cover rounded-2xl" alt=""/>
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
      <Canvas
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'absolute',
          top: isMouseOutside ? `${mousePosition.y - 100}px` : '50%',
          left: isMouseOutside ? `${mousePosition.x - 100}px` : '50%',
          width: '200px', // Set canvas size
          height: '200px',
          transform: isMouseOutside ? 'translate(0, 0)' : 'translate(-50%, -50%)',
          transition: 'top 0.5s ease, left 0.5s ease, transform 0.5s ease', // Smooth transition
          pointerEvents: 'none', // Allow interaction with elements below the canvas
        }}
      >
        <ScubaAnimation />
      </Canvas>
    </section>
  );
};

export default LearningNext;
