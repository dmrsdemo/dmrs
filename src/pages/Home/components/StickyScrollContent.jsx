import React from 'react'
import { motion } from 'framer-motion'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'

const StickyScrollContent = ({children, ...props}) => {

    const {imageUrl, title, titleSpan, spanColor, description, linkTitle, linkTo} = props;
    
    return (
        <>
            <div className="relative flex flex-col justify-center h-full">
                {imageUrl && <motion.img
                    initial={{ opacity: 0, x: 105 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                
                    src={imageUrl} alt="" className='absolute top-[-25%] right-[-25%] h-full brightness-90 tablet:right-0 tablet:h-[15rem] laptop:top-[0%] laptop:right-[100%] laptop:h-3/4' />}
                <motion.div
                    initial={{ opacity: 0, x: -75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true, margin: "-20px" }}

                    className="z-10 flex flex-col justify-center h-full gap-5">

                    
                    {children}
                </motion.div>
            </div>
        </>
    )
    
}

export default StickyScrollContent