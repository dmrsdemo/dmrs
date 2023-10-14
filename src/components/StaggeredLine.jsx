import React, { useEffect, useRef, useState } from 'react'
import { motion, transform } from 'framer-motion';

const parentVariants = {
    initial: { transition: { staggerChildren: 0.07, delayChildren: 0.02 }, },
    inview: { transition: { staggerChildren: .10, ease: 'easeOut' }, },
}

const spanVariants = {
    initial: {
        y: "100%",
        transition: {
            bottom: { stiffness: 1000, velocity: -100 },
        },
    },
    inview: {
        y: 0,
        transition: { stiffness: 1000, ease: 'easeOut', duration: .45 },
    },
}

const StaggeredLine = ({ content, fontSize }) => {
    const contentRef = useRef(null);
    const [lines, setLines] = useState([]);

    function collapseWhiteSpace(value) {
        return (value.trim().replace(/\s+/g, " "));
    }

    function extractPerLine(textNode) {
        textNode.textContent = collapseWhiteSpace(textNode.textContent);

        let textContent = textNode.textContent;
        let range = document.createRange();
        let lines = [];
        let lineCharacters = [];

        for (let i = 0; i < textContent.length; i++) {

            range.setStart(textNode, 0);
            range.setEnd(textNode, (i + 1));

            var lineIndex = (range.getClientRects().length - 1);

            if (!lines[lineIndex]) {
                lines.push(lineCharacters = []);
            }

            lineCharacters.push(textContent.charAt(i));
        }

        lines = lines.map((characters) => collapseWhiteSpace(characters.join("")))
        return lines;
    }

    useEffect(() => {
        const textNode = contentRef.current.firstChild;
        setLines(extractPerLine(textNode));
    }, []);

    return (
        <>
            <div className={`invisible max-h-0 ${fontSize ? `text-${fontSize}` : 'text-sm'}`} ref={contentRef}>{content}</div>
            <motion.p
                variants={parentVariants}
                initial='initial'
                whileInView='inview'
                className={`flex flex-col w-full ${fontSize ? `text-${fontSize}` : 'text-sm'}`}>
                    
                {lines.map((line, index) => (
                    <span 
                    key={index}
                    className='relative overflow-hidden max-h-fit' >

                        <motion.span
                            variants={spanVariants}
                            className='inline-block'
                            >
                            
                            {line}
                        </motion.span>
                        
                    </span>
                    ))}
            </motion.p>
        </>
    )
}

export default StaggeredLine