import React from "react";
import clsx from "clsx";

type BoundsProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}


const Bounds = React.forwardRef<HTMLDivElement, BoundsProps>(
    ({ as: Comp = "section", className, children, ...restProps}, ref) =>{
        return (
            <Comp ref={ref} className={clsx("px-4 py-8 md:py-10 lg:py-12 w-full sm:px-20 md:px-30", className)} {...restProps}>
                <div className="mx-auto w-full max-w-full">
                    {children}
                </div>
            </Comp>
        )
    }
)

Bounds.displayName = "Bounds";

export default Bounds;