import React, { useEffect, useRef, useState, useCallback } from 'react';
import clsx from 'clsx';

import { GoDot } from "react-icons/go";


const slideStyles = {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
}

const slideContainerSt = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
}

const ImageSlider = ({ children }: { children: React.ReactNode}) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [parentWidth, setParentWidth] = useState<number>(0);

    useEffect(() => {
        if (sliderRef.current) {
            setParentWidth(sliderRef.current.offsetWidth);
        }
    }, [sliderRef.current]);

    const getSlidesContainerWidth = () => ({
        ...slideContainerSt,
        width: parentWidth * React.Children.count(children),
        transform: `translateX(-${currentSlide * parentWidth}px)`
    });

    const goBack = () => {
        const firstSlide = currentSlide === 0;
        const newIndex = firstSlide ? React.Children.count(children) - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    }

    const goNext = useCallback(() =>{
        const lastSlide = currentSlide === React.Children.count(children) - 1;
        const newIndex = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    }, [currentSlide, children])

    const goTo = (index: number) => {
        setCurrentSlide(index);
    }

    useEffect(() => {
        timer.current = setInterval(goNext, 5000);
        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        }
    }, [goNext])

  return (
    <div className='relative h-[100%]' ref={sliderRef}>
        <div>
            <div onClick={goBack} className="absolute top-1/2 transform -translate-y-1/2 left-8 text-[45px] text-white z-10 cursor-pointer">
                ❰
            </div>
            <div onClick={goNext} className="absolute top-1/2 transform -translate-y-1/2 right-8 text-[45px] text-white z-10 cursor-pointer">
                ❱
            </div>
        </div>
        <div className='h-full overflow-hidden'>
            <div style={getSlidesContainerWidth()}>
                {React.Children.toArray(children).map((child, slideIndex) => (
                <div
                    key={slideIndex}
                    className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
                >
                    {child}
                </div>
                ))}
            </div>
        </div>
        <div className='flex justify-center'>
            {React.Children.toArray(children).map((slide, slideIndex) => (
                <div
                className={`cursor-pointer text-2xl mb-1 ${slideIndex == currentSlide ? 'text-chilli' : 'text-blue-200'}`}
                key={slideIndex}
                onClick={() => goTo(slideIndex)}
                >
                <GoDot />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider