import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'


const VerticalProgress = ({children}) => {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end center']
    });

    return (
        <div className="relative min-w-[10%] items-center justify-center">


            <div className="absolute top-0 left-[50%] h-full mt-4">

                <motion.div 
                style={{scaleY:scrollYProgress, transformOrigin:"top"}}
                ref={ref} 
                className="h-full min-w-[3px] max-w-[3px] bg-primary-300 rounded-lg">
                    
                </motion.div>

                <div className="absolute top-0 left-0 min-w-[3px] max-w-[3px] h-full rounded-lg flex items-center justify-center">

                    {children}

                    {/* end */}
                    <div className="absolute bg-primary-300 min-h-[.2rem] min-w-[1rem] bottom-0"></div>

                </div>

            </div>
        </div>
    )
}

export default VerticalProgress