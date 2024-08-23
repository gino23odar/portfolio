'use client'

import React, { useEffect, useRef } from 'react';
import { Content, isFilled, asImageSrc } from '@prismicio/client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';



type ProjectListProps = {
    items: Content.BlogPostDocument[] | Content.ProjectsDocument[];
    featured: Content.FeaturedProjectsDocument[];
    checkOutText: Content.ContentIndexSlice['primary']['check_out'];
    fallbackImage: Content.ContentIndexSlice['primary']['item_image'];
    contentType: Content.ContentIndexSlice['primary']['content_type'];
}

const ProjectList = ({items, featured, checkOutText = "Explore Article", fallbackImage, contentType} : ProjectListProps) => {
    
    gsap.registerPlugin(ScrollTrigger);

    const imageRef = useRef<(HTMLDivElement | null)[]>([]);

    const featuredImages = featured.map((item) => {
        const image = isFilled.image(item.data.preview) 
            ? item.data.preview 
            : fallbackImage;
        return asImageSrc(image, {
            fit: 'scale',
            w: 220,
            h: 150,
            exp: -8
        });
    })

    const contentImages = items.map((item) => {
        const image = isFilled.image(item.data.preview)
          ? item.data.preview
          : fallbackImage;
        return asImageSrc(image, {
          fit: "scale",
          w: 220,
          h: 150,
          exp: -8
        });
      });
    
      // Preload images
      useEffect(() => {
        contentImages.forEach((url) => {
          if (!url) return;
          const img = new Image();
          img.src = url;
        });
      }, [contentImages]);

      useEffect(() => {
        imageRef.current.forEach((image, i) => {
          const tlx = gsap.timeline({
            scrollTrigger: {
              trigger: image,
              pin: true,
              scrub: true,
              start: "top top",
              end: '+=200%',
            },
          });
    
          tlx.addLabel('initial')
            .to(image!.querySelectorAll('.image_items'), {
              ease: 'none',
              x: 0,
              stagger: 0.1,
            });
        });
    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
  
    ScrollTrigger.sort();


    return (
        <div className='mt-4 lg:mt-6 lg:mx-10 overflow-hidden'>
            <div className='acc_container flex w-full h-[20lvh] align-center justify-center mb-60'>
                <div className='acc_inner flex gap-4 '>
                    {featured.map((item, i) => (
                        <div className="card group rounded-xl cursor-pointer overflow-hidden" key={i}>
                            <img src={featuredImages[i]!} alt="" className="image w-full h-full object-cover" />
                            <img src={featuredImages[i]!} alt="" className="background absolute w-full h-[100vh] left-0 top-0 -z-20 object-cover pointer-events-none brightness-50" />
                            <div className="layer relative border-solid w-full h-1/2 -mt-[200px] z-40">
                                <div className='absolute w-[260px] bottom-10 right-4 p-[20px] opacity-0 group-hover:opacity-100'> 
                                    <h2 className='text-xl font-bold'> {item.data.title} </h2>
                                    <p className='opacity-80 my-1'> {checkOutText} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>            
            </div>
            <div className='images flex flex-wrap w-full justify-between ' ref={el =>{ imageRef.current[0] = el }}>
                    {items.map((item,i) => (
                        <div className="image_items block w-[50%] bg-lightchilli mb-px odd:border-r-2 odd:border-r-coolgray odd:-translate-x-[101%] even:translate-x-full odd:rounded-l-xl even:rounded-r-xl overflow-hidden" key={i}>
                            <a href={`/projects/${item.uid}`}>
                                <img src={contentImages[i]!} className='block w-full'/>
                            </a>
                            <div className='p-4'>
                                <div className='flex flex-col md:flex-row justify-between items-center'>
                                    <span>{item.data.title}</span>
                                    <span>{checkOutText}</span>
                                </div>
                                <div className='flex flex-wrap mt-px overflow-scroll'>
                                    {item.tags.map((tag, i) => (
                                    <span key={i} className='bg-coolgray p-2 rounded-lg m-1'>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default ProjectList