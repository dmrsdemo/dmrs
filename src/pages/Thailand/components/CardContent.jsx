import React from 'react'
import { motion } from 'framer-motion'

const CardContent = ( {title, description, className} ) => {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      className={`flex flex-col gap-2 ${className}`}>
        <h2 className='text-base mobile:text-md laptop:text-md desktop:text-md font-bold'>{title}</h2>
        <p className='text-sm'>{description}</p>
    </motion.div>
  )
}

export default CardContent