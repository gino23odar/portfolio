'use client'
import React, { useEffect, useState } from "react";

const ShufflingHeading = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const totalDuration = 1000; // Total duration in milliseconds

        useEffect(() => {
            if(!text) return;
            
            //const letterDuration = totalDuration / text.length; // Duration for each letter
            //let currentIndex = 0;
            const letterCount = text.length;
            const letterDuration = totalDuration / letterCount; // Average duration per letter

            const shuffleLetter = (index:number, prevShuffleEnd:number) => {
                if (index >= text.length) return;

                const remainingTime = totalDuration - prevShuffleEnd;
                const minShuffleTime = 100;
                const shuffleTime = Math.max(
                    minShuffleTime,
                    Math.random() * Math.min(remainingTime / (letterCount - index), letterDuration)
                );

                const interval = setInterval(() => {
                    setDisplayText((prevText) =>
                        text
                            .split("")
                            .map((char, i) =>
                                i < index
                                ? prevText[i]
                                : i === index
                                ? characters[Math.floor(Math.random() * characters.length)]
                                : " "
                            )
                            .join("")
                    );
                }, 50);

                setTimeout(() => {
                    clearInterval(interval);
                    setDisplayText((prevText) =>
                        prevText
                            .split("")
                            .map((char, i) => (i === index ? text[i] : char))
                            .join("")
                    );
                    
                    shuffleLetter(index+1, prevShuffleEnd + shuffleTime);
                }, shuffleTime);
            };

            shuffleLetter(0,0);
        }, [text]);

    return (
        <>{displayText}</>
    );
};

export default ShufflingHeading;