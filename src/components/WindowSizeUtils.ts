import { useState, useEffect } from 'react';

export const useScreenSizes = () => {
    const smallBreakpoint = 960;
    const mobileBreakpoint = 430;

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < smallBreakpoint);
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < mobileBreakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < smallBreakpoint);
            setIsMobileScreen(window.innerWidth < mobileBreakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isSmallScreen, isMobileScreen };
};

// 空の`export`文を追加してモジュールとして認識させる
export {};