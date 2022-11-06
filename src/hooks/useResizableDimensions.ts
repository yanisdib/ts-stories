import { useEffect, useState } from 'react';


type ReturnValue = {
    width: number,
    height: number
}


export const useResizableDimensions = (ref: React.MutableRefObject<any>): ReturnValue => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const updateDimensions = () => {
        setDimensions({
            width: ref.current.offsetWidth,
            height: ref.current.offsetHeight,
        });
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions, false);
    }, [ref]);

    return dimensions;
}