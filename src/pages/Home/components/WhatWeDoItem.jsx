import React, { useState } from 'react'
import { LiaArrowCircleRightSolid } from 'react-icons/lia'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        x: -20
    },

    inview: {
        opacity: 1,
        x: 0,   
    }
}

const WhatWeDoItem = ({ children, content, parentHover, active, handleSelectActive, className = null, index }) => {
    return (
        <motion.div
            variants={fadeInAnimationVariants}
            onClick={() => handleSelectActive(content)}
            className={`hover:pl-7 hover:grayscale-0 hover:opacity-100 hover:text-primary-300 hover:bg-black/5 text-background-dark gap-2 flex flex-col px-4 py-4 cursor-pointer transition-all duration-500 ${active ? 'pl-7 border-accent-400 text-accent-400' : parentHover ? 'grayscale text-background-dark opacity-50' : 'grayscale-0 text-background-dark opacity-100 border-black/20 '}`}>

            <div className="flex items-center justify-between w-full">
                <h2 className={`transition-[font-size] ${active ? 'text-sm desktop:text-base text-accent-400 font-medium pr-4 hd:text-md' : 'desktop:text-base hd:text-md'}`}>{content.name}</h2>
                <LiaArrowCircleRightSolid size={32} className={`transition-[transform] duration-700 ease-in-out ${active ? 'rotate-[90deg] text-accent-400' : 'rotate-0'}`} />
            </div>

            <div className={`overflow-hidden text-xs desktop:text-sm hd:text-base duration-1000 text-background-dark transition-[max-height] ease-in-out ${active ? 'max-h-[50rem]' : 'max-h-0'}`}>
                {content.content}
            </div>
        </motion.div>
    )
}

export default WhatWeDoItem