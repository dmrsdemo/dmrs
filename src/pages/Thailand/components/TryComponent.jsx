import { useState, useEffect, useRef } from "react"
import { easeInOut, motion, useDragControls} from 'framer-motion'

const TryComponent = () => {
  return (
    <motion.div 
      viewport={{once: true}}
      whileInView={{scale: 40, transition:{ duration: 0.5, ease: easeInOut, repeat: false} }}
      className="absolute flex items-center justify-center bg-background-dark w-[100px] h-[100px] left-[50%] rounded-full z-0">
    </motion.div>
  )
}

export default TryComponent