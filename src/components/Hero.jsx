import React from 'react'

const Hero = ({children}) => {
  return (
    <div className="relative flex w-full min-h-screen pt-16 overflow-hidden bg-background-dark">
      
      <div className="absolute top-[-150%] left-[-60%] opacity-20 z-10 bg-gradient-radial from-primary-500 via-background-dark to-background-dark h-[300%] aspect-square rounded-full"></div>
      <div className="absolute bottom-[-150%] right-[-60%] opacity-10 z-10 bg-gradient-radial from-accent-400 via-background-dark to-background-dark h-[300%] aspect-square rounded-full"></div>
      
      <>
        {children}
      </>
    </div>
  )
}

export default Hero