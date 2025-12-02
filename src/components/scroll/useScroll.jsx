import {useEffect, useState} from "react";

export const useScroll = () => {
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

        console.log(scrollPercent);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPercent;
}