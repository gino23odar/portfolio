'use client'

import React, {useEffect, useRef, useState} from 'react'
import { Content, isFilled, asImageSrc } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

type ContentListProps = {
    items: Content.BlogPostDocument[] | Content.ProjectsDocument[];
    checkOutText: Content.ContentIndexSlice['primary']['check_out'];
    fallbackImage: Content.ContentIndexSlice['primary']['item_image'];
    contentType: Content.ContentIndexSlice['primary']['content_type'];
}

const ContentList = ({items, checkOutText = "Explore Article", fallbackImage, contentType} : ContentListProps) => {

    gsap.registerPlugin(ScrollTrigger);

    const imageRef = useRef<(HTMLDivElement | null)[]>([]);
    const sliderRef = useRef<(HTMLDivElement | null)[]>([]);
    const imageRef2 = useRef<(HTMLDivElement | null)[]>([]);

    const [overflowHidden, setOverflowHidden] = useState(true);


    useEffect(() => {
        imageRef.current.forEach((image, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: image,
              pin: true,
              scrub: true,
              start: "top top -=100px",
              end: '+=100%',
            },
          });
    
          tl.addLabel('initial')
            .to(image!.querySelectorAll('.image_items'), {
              ease: 'none',
              x: 0,
              stagger: 0.1,
            });
        });

        sliderRef.current.forEach((sliderElement, index) => {
            if (sliderElement) {
              const sliderItems = sliderElement.querySelector('.slider_items') as HTMLElement;
      
              if (sliderItems) {
                const x = -sliderItems.offsetWidth + window.innerWidth;
      
                gsap.to(sliderItems, {
                  x: x,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: sliderElement,
                    pin: true,
                    scrub: 2,
                    start: 'top top',
                    end: '+=100%',
                    onEnter: () => setOverflowHidden(false),
                    onLeaveBack: () => setOverflowHidden(true),
                  },
                });
              }
            }
          });
        

          imageRef2.current.forEach((image, i) => {
            const tl3 = gsap.timeline({
              scrollTrigger: {
                trigger: image,
                pin: true,
                scrub: true,
                start: "top top -=100px",
                end: '+=250%',
              },
            });
      
            tl3.addLabel('initial')
              .to(image!.querySelectorAll('.image_items'), {
                ease: 'none',
                x: 0,
                stagger: 0.1,
              });
          });
    
        // Cleanup ScrollTrigger instances on component unmount
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);

      ScrollTrigger.sort();

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

    return (
        <div className={`mt-4 lg:mt-6 lg:mx-10 overflow-hidden ${overflowHidden ? 'overflow-hidden' : ''}`}>
            <div className='images flex flex-wrap w-full justify-between ' ref={el =>{ imageRef.current[0] = el }}>
                {items.slice(0,4).map((item,i) => (
                    <div className="image_items block w-[50%] bg-lightchilli mb-px odd:border-r-2 odd:border-r-coolgray odd:-translate-x-[101%] even:translate-x-full" key={i}>
                        <a href={`/blog/${item.uid}`}>
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
            <div className='slider flex w-full' ref={el =>{ sliderRef.current[0] = el }}>
                {/* Middle loop: Run through middle elements if length is over 8 */}
                <div className='slider_items flex items-center ' style={{width: `${items.length * 50}%`}}>
                    {items.length > 8 && (
                        items.slice(4, items.length - 4).map((item, i) => (
                            <a href={`/blog/${item.uid}`} key={i + 4}>
                                <div className="block w-[60vw] h-auto bg-lightchilli mb-px odd:border-r-2 odd:border-b-coolgray" >
                                    <img src={contentImages[i + 4]!} className='block w-full'/>
                                    <div className='flex justify-between items-center p-4'>
                                        <span>{item.data.title}</span>
                                        <span>{checkOutText}</span>
                                        <div className='flex flex-wrap overflow-scroll'>
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className='bg-coolgray p-2 rounded-lg m-1'>{tag}</span>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    )}
                </div>
            </div>
            <div className='images flex flex-wrap w-full justify-between ' ref={el =>{ imageRef2.current[0] = el }}>
                {/* Last loop: Run through last 4 elements if length is at least 4 */}
                    {items.length > 4 && (
                    items.slice(-4).map((item, i) => (
                        <div 
                        className="image_items block w-[50%] bg-lightchilli mb-px odd:border-r-2 odd:border-r-coolgray odd:-translate-x-[101%] even:translate-x-full" 
                        key={i + items.length - 4}  // Adjust key to avoid conflicts
                        >
                        <a href={`/blog/${item.uid}`}>
                          <img src={contentImages[i + items.length - 4]!} className='block w-full'/>
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
                        
                    ))
                )}
            </div>
        </div>
    )
}

export default ContentList