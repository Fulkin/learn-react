import {useEffect, useState} from "react";
import "../../../styles/scroll.css";

export const ScrollProgress = () => {

    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollPercent(scrolled);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="scroll-progress-wrapper"
        >
            <div
                style={{
                    height: "100%",
                    width: `${scrollPercent}%`,
                    backgroundColor: "#c1c2c4",
                    transition: "width 0s linear",
                }}
            />
        </div>
    )
}