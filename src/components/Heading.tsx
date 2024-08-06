import clsx from 'clsx';

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4";
    size?: "sm" | "md" | "lg"| "xl";
    children: React.ReactNode;
    className?: string;
}

export default function Heading({
    as: Comp = "h1",
    className,
    children,
    size = "lg",
} : HeadingProps){
    return (
        <Comp className={clsx(
            "font-bold",
            size === "sm" && "text-2xl md:text-3xl",
            size === "md" && "text-4xl md:text-5xl",
            size === "lg" && "text-6xl md:text-7xl",
            size === "xl" && "text-8xl md:text-9xl",
            className
        )}>
            {children}
        </Comp>
    );
}