import { useState, useEffect } from 'react';


export const useBreakpoint = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState(null);



    useEffect(() => {

        const breakpoints = {
            xSmall: '(min-width: 0px) and (max-width: 575px)',
            small: '(min-width: 576px) and (max-width: 640px)',
            medium: '(min-width: 641px) and (max-width: 991px)',
            large: '(min-width: 992px) and (max-width: 1199px)',
            xLarge: '(min-width: 1200px)'
        };

        const updateBreakpoint = () => {
            for (const breakpoint in breakpoints) {
                if (window.matchMedia(breakpoints[breakpoint]).matches) {
                    setCurrentBreakpoint(breakpoint);
                }
            }
        };

        // Initial update
        updateBreakpoint();

        // Add listener for changes
        const mediaQueryLists = Object.values(breakpoints).map(query => window.matchMedia(query));
        const listener = () => updateBreakpoint();

        mediaQueryLists.forEach(mql => mql.addListener(listener));

        // Clean up listeners on unmount
        return () => {
            mediaQueryLists.forEach(mql => mql.removeListener(listener));
        };
    }, []);

    return currentBreakpoint;
};