'use client'

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// testing Framer instead of just using GSAP
import { motion, useAnimation } from 'framer-motion';

import { KeyTextField, RichTextField } from '@prismicio/types';
import { PrismicRichText } from '@prismicio/react';

interface TimelineItem {
    title: KeyTextField;
    time_period: KeyTextField;
    institution: KeyTextField;
    description: RichTextField;
    iswork: boolean;
    isold: boolean;
}

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false));
    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = containerRefs.current.findIndex((ref) => ref === entry.target);
                    if (entry.isIntersecting && index !== -1) {
                        setVisibleItems((prev) => {
                            const newVisibleItems = [...prev];
                            newVisibleItems[index] = true;
                            return newVisibleItems;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );
  
        containerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
  
        return () => {
            containerRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center p-8">
            <div className="sm:absolute  top-0 bottom-0 w-1 bg-blue-900 transform -translate-x-1/2"></div>
            {items.map((item, index) => {
                const isodd = index % 2 === 1;
                return (
                    <div key={`${item.time_period}-${index}`} className="relative w-[80%] mb-10">
                        <div
                            className={`absolute top-[40%] sm:transform lg:-translate-y-1/2 w-10 h-10 bg-white border-4 border-blue-900 rounded-full flex items-center justify-center z-10 lg:left-1/2 ml-[-25px]`}
                        >
                            <img src="/path/to/icon.png" alt="icon" className="w-6 h-6" />
                        </div>
                        <motion.div
                            ref={(el) => {
                                containerRefs.current[index] = el;
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: visibleItems[index] ? 1 : 0, y: visibleItems[index] ? 0 : 50 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className={`bg-blue-900 rounded-lg p-4 w-[80%] max-w-xl opacity-0 transform translate-y-12 ${
                                isodd ? 'lg:mr-[calc(50%+2vw)]' : 'lg:ml-[calc(50%+2vw)]'
                            }`}
                        >
                            <div className="flex flex-col items-start">
                                <div className="flex flex-col sm:flex-row items-center justify-between font-bold text-2xl border-b-4 border-cyan-300 mb-2 w-full">
                                    <span>{item.title}</span>
                                    <span className="text-sm font-light">{item.time_period}</span>
                                </div>
                                <PrismicRichText field={item.description} />
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
