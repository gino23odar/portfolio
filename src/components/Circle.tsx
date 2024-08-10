import React, { useEffect } from 'react'

type CircleProps = {
    children: React.ReactNode;
}

const Circle: React.FC<CircleProps> =  ({ children }) => {
    const [radius, setRadius] = React.useState(400); // Radius of the circle

    const halfCircleAngle = Math.PI; // 180 degrees in radians
    const childrenArray = React.Children.toArray(children); // Convert children to an array
    const step = halfCircleAngle / (childrenArray.length - 1); // Angle between each item

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 480) {
              setRadius(100); // Smaller radius for small screens
            } else if (window.innerWidth < 769) {
              setRadius(120); // Medium radius for medium screens
            } else if (window.innerWidth < 900) {
                setRadius(300); // Medium-large radius for medium screens
            } else {
              setRadius(400); // Default radius for large screens
            }
        }

        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, [])

    const calculatePosition = (index : number) => {
        const angle = step * index - halfCircleAngle /2;
        const x = radius + radius * Math.cos(angle);
        const y = radius + radius * Math.sin(angle);
        return { left: `${x}px`, top: `${y}px` };
    };

    return (
        <div className="circle-container top-[550px] sm:top-[650px] md:top-[750px] ">
            <div className="circle">
                {childrenArray.map((child, index) => (
                    <div
                        key={index}
                        className="item"
                        style={calculatePosition(index)}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Circle;