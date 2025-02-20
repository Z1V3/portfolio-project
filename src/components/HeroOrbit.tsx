import { PropsWithChildren, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
    children,
    size,
    rotation,
    shouldSpin = false,
    spinDuration,
    shouldOrbit = false,
    orbitDuration,
}: PropsWithChildren<{
    size: number;
    rotation: number;
    shouldSpin?: boolean;
    spinDuration?: string;
    shouldOrbit?: boolean;
    orbitDuration?: string;
}>) => {

    const [scale, setScale] = useState(0.5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setScale(1);
            } else {
                setScale(0.5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className={twMerge(shouldOrbit === true && "animate-spin")}
                style={{
                    animationDuration: orbitDuration,
                }}
            >
                <div
                    className="flex items-start justify-start"
                    style={{
                        transform: `scale(${scale}) rotate(${rotation}deg)`,
                        height: `${size}px`,
                        width: `${size}px`,
                    }}
                >
                    <div
                        className={twMerge(shouldSpin === true && "animate-spin")}
                        style={{
                            animationDuration: spinDuration,
                        }}
                    >
                        <div
                            className="inline-flex"
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
