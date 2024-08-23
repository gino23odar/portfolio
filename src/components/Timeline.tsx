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

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const TimelineItemContainer = styled(motion.div)`
    background-color: #1f107d;
    border-radius: 8px;
    margin: 1rem 0;
    padding: 1rem;
    width: 80%;
    max-width: 600px;
    opacity: 0; /* Start hidden for animation */
    transform: translateY(200px); /* Start slightly below */
`;

const Date = styled.div`
    font-weight: thin;
    font-size: 1.2vh;
    left: 0;
`;

const Title = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    font-weight: bold;
    font-size: 2vh;
    margin-bottom: 0.5rem;
    border-bottom: 2mm ridge rgba(11, 220, 220, .3);
`;


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
    <TimelineContainer>
        {items.map((item, index) => (
            <TimelineItemContainer
                key={`${item.time_period}-${index}`} 
                ref={(el) => {
                containerRefs.current[index] = el;
                }}  // Ensure no return value
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: visibleItems[index] ? 1 : 0, y: visibleItems[index] ? 0 : 50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <Title>
                    {item.title}
                    <Date>{item.time_period}</Date>
                </Title>
                <PrismicRichText field={item.description} />
            </TimelineItemContainer>
        ))}
    </TimelineContainer>
  );
};

export default Timeline;
