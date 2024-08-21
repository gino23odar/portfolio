import React, { useEffect, useState } from "react";

const ShufflingHeading = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        useEffect(() => {
            if(!text) return;
            
            const totalDuration = 2000; // Total duration in milliseconds
            const letterDuration = totalDuration / text.length; // Duration for each letter

            let currentIndex = 0;

            const shuffleLetter = () => {
                if (currentIndex >= text.length) return;

                const interval = setInterval(() => {
                    setDisplayText((prevText) =>
                        text
                            .split("")
                            .map((char, i) =>
                                i < currentIndex
                                ? char
                                : characters[Math.floor(Math.random() * characters.length)]
                            )
                            .join("")
                    );
                }, 50);

                setTimeout(() => {
                    clearInterval(interval);
                    setDisplayText((prevText) =>
                        prevText
                            .split("")
                            .map((char, i) => (i < currentIndex ? text[i] : char))
                            .join("")
                    );
                    currentIndex++;
                    shuffleLetter();
                }, letterDuration);
            };

            shuffleLetter();
        }, [text]);

    return (
        <h1>{displayText}</h1>
    );
};

export default ShufflingHeading;