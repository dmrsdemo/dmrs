import React, { useRef, useState } from 'react'
import { motion, useScroll, useInView, useMotionValueEvent, inView } from 'framer-motion'

const VerticalProgressPoint = ({ ...props }) => {
    const { className } = props;
    const ref = useRef(null);
    const [visible, setVisible] = useState(true)

    const{scrollYProgress} = useScroll({
        target:ref,
        offset: ['center end', 'end center']
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if(latest < 1) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    })

    return (
        <>
        {/* <div className={`absolute min-h-[10px] aspect-square rounded-full z-10 ${className} bg-gray-300`}></div> */}
        <motion.div
            ref={ref} 
            className={`absolute min-h-[10px] aspect-square rounded-full z-20 transition-all ${className} ${visible ? 'opacity-100 scale-100 ' : 'opacity-0 scale-0'}`}>
        </motion.div>
        </>
    )
}

export default VerticalProgressPoint