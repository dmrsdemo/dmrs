import React from 'react'
import { motion } from 'framer-motion'


const contents =[
  {
    title: 'Trained Detectives',
    paragraph: <>DMRS staff are <strong>trained detectives</strong> and <strong>intelligence analysts</strong> who use both objective and subjective thinking to <strong>gather online data and intelligence</strong> for many Fortune 500 companies worldwide.</>,
  },
  {
    title: 'Premier and Innovative',
    paragraph: <>Our facilities also offer <strong>premier and innovative investigative consultancy</strong> in all areas of corporate and personal requirements.</>,
  },
  {
    title: 'Global Protection',
    paragraph: <>DMRS is proud to be focused on the <strong>protection of patients globally</strong> through our identification of risks concerned with the illicit trade in counterfeit, sub-standard and suspect medicines together with all associated risks to corporations tasked with the protection of consumers worldwide.</>,
  },
]

const fadeRight = {
  animate: (index) => ({
    opacity: [0,1],
    x: [-80, 0],
    transition: {
      delay: 0.3 * index+1,
      duration: 0.4
    }
  })
}

const slideRight = {
  animate: (index) => ({
    width: ['110%', '0%'], 
    transition: {
      delay: 0.4 * index+1,
      duration: .7
    }
  })
}

const SecondSection = () => {
  return (
    <div className="w-full h-full flex items-center px-6
      mobile:px-6
    ">
      <motion.div 
        whileInView={{ 
          opacity: [0, 1], 
          x: [-80, 0], 
          transition: { 
            delay: 1, 
            duration: 1, 
            staggerChildren: 0.1
          }
        }}
        viewport={{once:true}}
        className="flex flex-col h-full gap-y-10 gap-x-5 items-center text-white
        tablet:gap-y-20
        laptop:gap-y-[9rem]
        desktop:gap-y-32
        ">
        {contents.map((content, index) => {
          return(
            <div 
              key={ index } 
              className="grid h-full gap-2 items-center text-white
              mobile:
              tablet:gap-3
              laptop:grid-cols-2 laptop:gap-10
              desktop:gap-20
            ">
              <motion.div 
                variants={ fadeRight } 
                viewport={{once:true}}
                whileInView="animate" 
                custom={ index } 
                className='flex items-center w-full'
              >
                <h1 className="relative text-md 
                  mobile:text-md 
                  tablet:text-lg 
                  laptop:text-xl 
                  desktop:text-2xl 
                ">
                  {content.title}
                </h1>
              </motion.div>
              <motion.p className="relative desktop:text-base">
                <motion.span 
                  variants={ slideRight } 
                  viewport={{once:true}}
                  whileInView="animate" 
                  custom={ index }
                  className="absolute right-0 bg-background-dark min-h-full"    
                />
                  { content.paragraph }
              </motion.p>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default SecondSection