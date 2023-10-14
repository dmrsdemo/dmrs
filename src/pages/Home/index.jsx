
import Hero from '../../components/Hero'
import StickyScrollItem from './components/StickyScrollItem'
import TextMarquee from './components/TextMarquee'
import Button from '../../components/Button'
import WhatWeDo from './components/WhatWeDo'
import GridFiller from './components/GridFiller'
import ColoredGrid from '../../components/ColoredGrid'
import VerticalProgressPoint from '../../components/VerticalProgressPoint'
import StickyScrollContent from './components/StickyScrollContent'
import Rocket from './components/Rocket'
import { Link } from 'react-router-dom'
import { FaEye, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'
import VerticalProgress from '../../components/VerticalProgress'
import StaggeredLine from '../../components/StaggeredLine'
import { MissionRocket } from '../../components/Svgs'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -80
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: .5
    }
  })
}

const Home = () => {

  return (
    <div className="flex flex-col w-full bg-white overflow-clip">
      <Hero>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex flex-col w-full h-full">

            <ColoredGrid />

            <div className="absolute top-0 left-0 z-40 w-3/4 h-full opacity-50 bg-gradient-to-r from-black via-black to-transparent"></div>

            {/* actual hero */}
            <div className="z-50 relative flex flex-col items-center overflow-auto h-full w-full gap-2 py-[calc(4rem+2rem)] text-white px-10 
            laptop:px-28
            ">


              <div className="absolute z-50 hidden scale-110 -rotate-90 bottom-28 right-28 
              laptop:block 
              ">
                <div className="flex items-center gap-5 animate-ltr">
                  <BsArrowLeft className='scale-x-[150%]' />
                  <p className='whitespace-nowrap'>Scroll Down</p>
                </div>
              </div>


              <div className="flex flex-col w-full gap-5
              laptop:gap-20 laptop:flex-row
              ">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="flex flex-col col-span-3">
                    <img src="./images/DMRS.webp" alt="" className='w-full invert' />
                </motion.div>

                <motion.p
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .2, duration: 1, ease: 'easeOut' }}
                  className='text-sm self-start mb-10
                  laptop:hidden
                  '>
                    Dan Murdoch Risk Services
                  </motion.p>

                <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="hidden flex-col min-w-[15rem] rounded-lg overflow-hidden w-full
                  laptop:flex
                  ">
                    <Link to="thailand" className='flex items-center justify-center p-2 py-5 font-medium text-center transition-all bg-white hover:h-full h-1/2 text-background-dark' >Our Services</Link>
                    <Link to="contact" className='flex items-center justify-center gap-4 p-2 py-5 font-medium text-center transition-all hover:h-full h-1/2 hover:brightness-110 bg-primary-300 text-background-dark' >Get Started  <BsArrowRight className="scale-150" /> </Link>
                </motion.div>
              </div>

              <div className="flex flex-col w-full h-full gap-10 
              tablet:flex-row tablet:mt-10 
              laptop:flex-col laptop:self-start
              ">

                <motion.p
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .2, duration: 1, ease: 'easeOut' }}
                  className='hidden text-base
                  laptop:block
                  '>
                    Dan Murdoch Risk Services
                  </motion.p>

                <motion.div
                  initial={{ x: -450 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .4, duration: 1, ease: 'easeOut' }}
                  className="flex flex-col justify-center gap-1 
                  tablet:w-1/2
                  laptop:mt-auto laptop:items-start
                  ">
                    <p className='z-10 text-xs
                    mobile:text-sm
                    laptop:text-base 
                    hd:text-lg
                    '>
                      Providing Global Corporations with
                    </p>
                  <TextMarquee />
                </motion.div>

                <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="flex flex-col min-w-[15rem] rounded-lg overflow-hidden w-full mt-auto
                  tablet:w-1/2
                  laptop:hidden ">
                    <Link to="thailand" className='flex items-center justify-center p-2 py-5 font-medium text-center transition-all bg-white hover:h-full h-1/2 text-background-dark' >Our Services</Link>
                    <Link to="contact" className='flex items-center justify-center gap-4 p-2 py-5 font-medium text-center transition-all hover:h-full h-1/2 hover:brightness-110 bg-primary-300 text-background-dark' >Get Started  <BsArrowRight className="scale-150" /> </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </Hero>

      {/* WHO ARE WE SECTION */}
      <section className="flex flex-col gap-16 overflow-hidden navTrigger py-10 px-12 
      tablet:px-12
      laptop:p-20 laptop:pb-0 laptop:overflow-visible laptop:flex-row
      desktop:px-24
      ">
        <div className="flex flex-col items-center justify-center gap-1 z-10
        laptop:sticky laptop:flex-1 laptop:top-16 laptop:max-h-[calc(100vh-4rem)]
        ">
          <h2
            className='text-lg font-bold text-center 
            desktop:text-xl hd:text-3xl
            '>WHO ARE WE?
          </h2>
          <p className='text-sm text-center 
          desktop:text-base hd:text-md
          '>
            Discover who we are and be part of our <span className='font-bold text-accent-500'>JOURNEY</span>
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-16">
          <StickyScrollItem>
            <StickyScrollContent imageUrl="./images/australia-map.png">

              <h2 className='text-xl font-bold 
              desktop:text-2xl hd:text-3xl
              '>
                DMRS <span className='text-primary-300'>Australia</span>
              </h2>
              <p className='text-xs text-justify 
              desktop:text-sm hd:text-md
              '>
                Dan Murdoch Risk Services (Australia) Pty Ltd is the parent company of our operational division Dan Murdoch Risk Services (Thailand) Limited.
              </p>

              <Button size="xs" variant='default' className=" w-fit !bg-accent-400 !ring-accent-400 text-white">
                <Link to="/dmrs-fe/australia">
                  Go to DMRS Australia
                </Link>
              </Button>

            </StickyScrollContent>

          </StickyScrollItem>

          <StickyScrollItem>
            <StickyScrollContent imageUrl="./images/thailand-map.png">

              <h2 className='text-xl font-bold 
              desktop:text-2xl 
              hd:text-3xl
              '>
                DMRS <span className='text-primary-300'>Thailand</span>
              </h2>
              <p className='text-xs text-justify 
              desktop:text-sm 
              hd:text-md'>
                Dan Murdoch Risk Services (Thailand) Co. Ltd. staff are trained detectives and intelligence analysts who use both objective and subjective thinking to gather manual online data leading to intelligence for many Fortune 500 companies worldwide.
              </p>

              <Button size="xs" variant='default' className=" w-fit !bg-accent-400 !ring-accent-400 text-white">
                <Link to="/dmrs-fe/thailand">
                  Go to DMRS Thailand
                </Link>
              </Button>

            </StickyScrollContent>
          </StickyScrollItem>

          <StickyScrollItem>
            <StickyScrollContent>

              <h2 className='font-bold text-md 
              desktop:text-2xl 
              hd:text-3xl
              '>
                Specialization
              </h2>
              <p className='text-xs text-justify 
              desktop:text-sm 
              hd:text-md
              '>
                We specialize in pharmaceuticals and the protection of and identifying risks associated with medicines worldwide.
              </p>

              <Button size="xs" variant='default' className="w-fit">
                <Link to="/dmrs-fe/contact">
                  Get Started
                </Link>
              </Button>

            </StickyScrollContent>
          </StickyScrollItem>


        </div>
      </section>

      {/* VISION AND MISSION SECTION */}
      <section className="relative flex  z-[1] gap-5 px-6 py-8
        mobile:py-10 mobile:px-12 
        tablet:px-12
        laptop:p-20
        desktop:px-24">

        <div className="hidden absolute top-0 right-0 translate-y-[-70vh] translate-x-[40vh]
        laptop:block
        ">
          {/* <Rocket/> */}
          < MissionRocket />
        </div>

        {/* <div className="hidden 
        laptop:block
        ">
          <VerticalProgress>
            <VerticalProgressPoint className="top-0 bg-primary-300" />
            <VerticalProgressPoint className="top-[13.5rem] bg-primary-300
            tablet:top-[10rem] 
            laptop:top-[13.5rem] 
            desktop:top-[10.5rem] 
            hd:top-[14rem]" />
          </VerticalProgress>
        </div> */}

        <div className="flex flex-col  gap-10
        laptop:max-w-[55%]
        ">
          <div className="flex flex-col gap-3">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              className="flex items-center gap-3">

              <div className="flex items-center justify-center p-2 rounded-md bg-black/5 aspect-square">
                <FaEye className='text-sm 
                laptop:text-md 
                hd:text-lg
                '/>
              </div>

              <h2 className="text-lg font-bold 
              laptop:text-xl 
              hd:text-2xl
              ">
                Our <span className='text-primary-300'>Vision</span>
              </h2>

            </motion.div>

            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
              className='text-xs text-justify 
              laptop:text-sm 
              hd:text-base'>
                Dan Murdoch Risk Services will be the preferred company of choice for online intelligence, investigative consultancy, brand protection and business intelligence advice worldwide offering beneficial solutions for all corporate and personal problems.
              </motion.p>
          </div>

          <div className="flex flex-col gap-3">

            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-md bg-black/5 aspect-square">
                <FaRocket className='text-sm 
                laptop:text-md 
                hd:text-lg' />
              </div>
              <h2 className="text-lg font-bold 
              laptop:text-xl 
              hd:text-2xl">
                Our <span className='text-primary-300'>Mission Statement</span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
              className='text-xs text-justify 
              laptop:text-sm 
              hd:text-base
              '>
              Dan Murdoch Risk Services will offer and deliver to the corporate world and the general public a complete range of business services from intelligence strategies and a true investigative consultancy to proactive solutions and risk management strategies for internal and external problems facing companies and individuals worldwide.
            </motion.p>
          </div>

        </div>

      </section>

      <section className='relative flex flex-col gap-10 mt-16 px-6 py-8 
      mobile:py-10 mobile:px-12 
      tablet:px-12
      laptop:p-20 laptop:flex-row
      desktop:px-24
      
      '>

        {/* grid background */}
        <div className="absolute top-0 left-0 flex w-full h-full">
          <div className="relative w-full h-full">

            <div className="absolute right-0 grid w-3/4 h-full grid-cols-7">
              <GridFiller cellCount={35} cellClass={'border border-background-dark/5'} />
            </div>

            <div className="absolute right-0 w-3/4 h-full bg-gradient-radial from-transparent to-white"></div>

          </div>
        </div>


        <div className="z-10 flex flex-col items-center gap-8 
        laptop:w-[45%]
        ">

          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center 
            hd:flex-row hd:gap-5
            ">
            <img src="./images/sheild-dynamic-color.png" className='w-1/4' alt="" />
            <h2 className='text-lg font-bold text-center 
            hd:text-2xl hd:text-left
            '> What are <span className="text-primary-300">we</span> offering?</h2>
          </motion.div>


          <div className="flex flex-col gap-3 text-xs 
          tablet:text-sm tablet:w-3/4 
          laptop:w-full laptop:px-5 laptop:gap-5 
          hd:text-base hd:gap-10
          ">
            <p className='text-justify'>The services DMRS offers fall into three broad areas, labeled as <strong>Intelligence</strong>, <strong>Investigations</strong>,
              and <strong>Research</strong>.
            </p>
            <p className='text-justify'>
              While our geographical areas of operation are Asia-wide and Australia we conduct
              intelligence monitoring and investigations worldwide using our own staff and trusted
              associates.
            </p>
          </div>
        </div>

        <WhatWeDo />

      </section>

    </div>
  )
}

export default Home