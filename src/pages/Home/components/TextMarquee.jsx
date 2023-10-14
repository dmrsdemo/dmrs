import React, { useEffect, useRef, useState } from 'react'

const TextMarquee = () => {
    const base = 2.353; // font size in rem
    
    
    const parentRef = useRef(null);
    const baseRef = useRef(null);
    const content = ['Intelligent Intelligence', 'Meaningful Investigations', 'Thoughtful Research'];
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    
    useEffect(() => {
        parentRef.current.style.maxHeight = `${baseRef.current?.getBoundingClientRect().height}px`;
        resetTimeout();

        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => prevIndex === content.length - 1 ? 0 : prevIndex + 1)
        }, 2500);

        return () => {setTimeout};
    }, [index]);

    function resetTimeout() {
        if(timeoutRef.current) {
            
            clearTimeout(timeoutRef.current);
        }
    }

    return (
        <div ref={parentRef} className={`flex flex-col overflow-hidden transition-all max-h-[2.353rem] w-full laptop:w-fit`}>
            <div className={`whitespace-nowrap flex transition-all duration-1000 ease-in-out flex-col items-start z-10`} style={{transform: `translateY(${-index * `${baseRef.current?.getBoundingClientRect().height/16}` ?? base}rem)`}}>
                {content.map((item, index) => <p ref={baseRef} className={`text-xs mobile:text-md`} key={index}>{item}</p>)}
            </div>
        </div>
    )
}

export default TextMarquee