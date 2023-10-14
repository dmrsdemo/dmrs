import Hero from '../../components/Hero'
import Button from '../../components/Button'
import DMRSimg from '../../assets/Australia-dots.webp'
import Australia_img from '../../assets/dmrs-australia.webp'
import II_icon from '../../assets/intelligent-intelligence-icon.webp'
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from 'react'
import 'animate.css';
import ColoredGrid from '../../components/ColoredGrid'
import { Link } from 'react-router-dom'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { LuLightbulb } from 'react-icons/lu'
import { PiListMagnifyingGlassLight } from 'react-icons/pi'
import { SiDatabricks } from 'react-icons/si'

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
      duration: .7
    }
  })
}

const Australia = () => {
  const blockCount = new Array(28);
  const blockRef = useRef([]);

  function toggleBlock(selectedBlock) {
    if (selectedBlock.classList.contains('active') || !selectedBlock) return;

    selectedBlock.classList.add('fill');

    setTimeout(() => {
      selectedBlock.classList.remove('fill');
    }, (Math.random() * 2) * 5000);

  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const selectedBlock = blockRef.current[Math.floor(Math.random() * 25)];
      toggleBlock(selectedBlock);
    }, 5000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="flex flex-col w-full bg-white">
      <Hero>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex flex-col w-full h-full">

            <ColoredGrid />

            <div className="absolute top-0 left-0 z-40 w-3/4 h-full opacity-50 bg-gradient-to-r from-black via-black to-transparent"></div>

            {/* actual hero */}
            <div className="z-50 relative flex flex-col overflow-auto items-center h-full w-full gap-2 py-[calc(4rem+2rem)] text-white px-10 
              laptop:px-28">

              <div className="absolute z-50 hidden scale-110 -rotate-90 bottom-28 right-28 
                laptop:block">
                <div className="flex items-center gap-5 animate-ltr">
                  <BsArrowLeft className='scale-x-[150%]' />
                  <p className='whitespace-nowrap'>Scroll Down</p>
                </div>
              </div>


              <div className="flex flex-col items-center w-full gap-10 
                laptop:gap-20 laptop:flex-row">
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
                  className='text-base text-center items 
                    mobile:text-left 
                    laptop:hidden'>
                    Dan Murdoch Risk Services
                  </motion.p>

                <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="hidden flex-col min-w-[15rem] rounded-lg overflow-hidden w-full 
                    laptop:flex">
                    <Link to="thailand" className='flex items-center justify-center p-2 py-5 font-medium text-center transition-all bg-white hover:h-full h-1/2 text-background-dark' >Our Services</Link>
                    <Link to="contact" className='flex items-center justify-center gap-4 p-2 py-5 font-medium text-center transition-all hover:h-full h-1/2 hover:brightness-110 bg-primary-300 text-background-dark' >Get Started  <BsArrowRight className="scale-150" /> </Link>
                </motion.div>
              </div>

              <div className="flex flex-col w-full h-full gap-10 
                tablet:flex-row tablet:mt-10 
                laptop:flex-col laptop:self-start">
                <motion.p
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .2, duration: 1, ease: 'easeOut' }}
                  className='hidden text-base 
                    mobile:text-left 
                    laptop:block'>

                  Dan Murdoch Risk Services
                </motion.p>

                <motion.div
                  initial={{ x: -450 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .4, duration: 1, ease: 'easeOut' }}
                  className="flex flex-col items-center justify-center gap-1 
                    tablet:w-1/2
                    laptop:mt-auto laptop:items-start ">
                  <p className='z-10 text-md
                    laptop:text-xl'>AUSTRALIA</p>
                  
                </motion.div>

                <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="flex flex-col min-w-[15rem] rounded-lg overflow-hidden w-full mt-auto
                    tablet:w-1/2
                    laptop:hidden">
                    <Link to="thailand" className='flex items-center justify-center p-2 py-5 font-medium text-center transition-all bg-white hover:h-full h-1/2 text-background-dark' >Our Services</Link>
                    <Link to="contact" className='flex items-center justify-center gap-4 p-2 py-5 font-medium text-center transition-all hover:h-full h-1/2 hover:brightness-110 bg-primary-300 text-background-dark' >Get Started  <BsArrowRight className="scale-150" /> </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </Hero>

      {/* DMRS Australia */}
      <section className="relative gap-16 navTrigger 
        tablet:z-12">

        <div className="flex flex-col w-full gap-6 px-6 py-8 h-fit 
          mobile:py-10 mobile:px-12 mobile:h-fit mobile:flex-col 
          tablet:items-center tablet:px-12 tablet:flex-row 
          laptop:p-20 laptop:gap-24 
          desktop:min-h-screen desktop:gap-20 desktop:px-24">
          
          <motion.div
            initial={{ opacity: 0, x: 105 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex w-full h-[300px] bg-gray-200 rounded-tl-[2rem] rounded-br-[2rem] z-10  overflow-hidden
              tablet:h-[calc((3/5)*100vh)] tablet:w-1/2 tablet:rounded-tl-[4rem] tablet:rounded-br-[4rem] 
              laptop:w-1/2">
            <img src={Australia_img} alt="" className='object-cover w-full h-full' />
          </motion.div>
          <img src={DMRSimg} alt="" className="hidden top-0 z-0 
            tablet:absolute tablet:right-0 tablet:w-auto tablet:m-auto tablet:min-h-[600px] tablet:max-h-[850px] tablet:block" />

          <motion.div 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            custom={1}
            className="z-10 flex flex-col justify-center w-full gap-4 mobile:w-full mobile:gap-4 tablet:w-1/2 tablet:gap-10">
            <h2 className="flex flex-col text-lg font-bold 
              mobile:text-xl 
              tablet:text-xl
            ">
              Dan Murdoch Risk Services 
              <strong className="text-lg font-bold text-primary-300 
                mobile:text-2xl 
                tablet:text-2xl
              ">
                Australia.</strong></h2>
            <div className="flex flex-col gap-4 text-xs 
              mobile:text-sm 
              laptop:text-sm 
              desktop:text-base">
              <p><strong className="text-accent-500">DMRS</strong> <strong className="text-primary-300">Australia</strong> Pty Ltd is the parent company for the operational division Dan Murdoch Risk Services (Thailand) Co. Limited.</p>
            </div>
          </motion.div>
          {/* <div className="flex flex-col w-full gap-10 tablet:z-10 tablet:w-full">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -105 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="font-bold text-md text-bg-dark laptop:text-xl">Dan Murdoch Risk Services</motion.p>

              <motion.p
                initial={{ opacity: 0, x: -105 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-lg font-bold text-primary-300 laptop:text-2xl">Australia</motion.p>

            </div>

            <motion.p
              initial={{ opacity: 0, x: -105 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-lg text-xs text-bg-dark tablet:z-10 tablet:text-sm">
              <strong>DMRS </strong>
              <strong className="text-primary-400">Australia </strong>
              Pty Ltd is the parent company for the operational division Dan Murdoch Risk Services (Thailand) Co. Limited.
            </motion.p>

          </div> */}
        </div>
        
      </section>

      {/* Services */}
      <section className='z-10 flex flex-col gap-10 p-8 overflow-hidden navTrigger
        mobile:p-18 
        laptop:p-28 laptop:overflow-visible'>
        <div className="flex flex-col justify-center w-full col-span-3 gap-5">
          <p className="font-bold text-center uppercase text-md text-bg-dark 
            laptop:text-xl">Who are Dan Murdoch Risk Services?</p>
          <p className="self-center max-w-5xl text-center text-xs text-bg-dark 
            tablet:min-w-[565px] tablet:text-sm">
            <strong className="text-accent-800">DMRS </strong>
            <strong className="text-primary-400">Australia </strong>
            Pty Ltd Pty Ltd operates all services offered under the banners of DMRS, Dan Murdoch Risk Services, Your Intelligence Program, and DMRS VPN.
          </p>
        </div>
        
        <div className='grid grid-rows-3 gap-10 
          mobile:grid-cols-3 mobile:grid-rows-1' >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start gap-2 px-5 py-10 border rounded-lg border-background-dark/05">
            <div className="flex items-center justify-center h-20 aspect-square">
              <motion.div
                whileInView={{ scale: [1, 0.5, 1.3,1] }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  times: [0, 1.5, 1]
                }}
              >
                <LuLightbulb size={60} />  
              </motion.div>
              
            </div>
            <p className='text-center'>Intelligence</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start gap-2 px-5 py-10 border rounded-lg border-background-dark/05">
            <div className="flex items-center justify-center h-20 aspect-square">
              
              <motion.div
                whileInView={{ scale: [1, 0.5, 1.3,1] }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  times: [0, 1.5, 1]
                }}
              >
                <PiListMagnifyingGlassLight size={60} /> 
              </motion.div>
            </div>
            <p className='text-center'>Brand Identity</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start gap-2 px-5 py-10 border rounded-lg border-background-dark/05">
            <div className="flex items-center justify-center h-20 aspect-square">
              
              <motion.div
                whileInView={{ scale: [1, 0.5, 1.3,1] }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  times: [0, 1.5, 1]
                }}
              >
                <SiDatabricks size={60} />
              </motion.div>
            </div>
            <p className='text-center'>Data Collection</p>
          </motion.div>    
        </div>
        
      </section>


      {/* Intelligent Intelligence */}
      <section className="relative p-8 bg-background-dark 
        mobile:p-28 
        tablet:p-28">
        <div className="flex flex-col gap-10 
          mobile:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}
            className= 'flex justify-center'
          >
            <img src={II_icon} alt="" className="object-contain w-1/2 h-full 
              mobile:w-auto" />  
          </motion.div>
          

          <div className="flex flex-col justify-center gap-3 text-center 
            mobile:text-left">
            <p className="text-sm 
              tablet:text-md 
              laptop:text-lg ">
            <motion.div
              initial={{ opacity: 0, y: -80}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn"}}
              viewport={{ once: true }}
            >
            <strong className="text-primary-300">Intelligent Intelligence</strong>
            </motion.div>
              
            </p>

            <p className="text-sm text-justify text-white 
                          tablet:text-base 
                          laptop:text-md">
            <motion.div
              initial={{ opacity: 0, y: 80}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.5, ease: "easeIn"}}
              viewport={{ once: true }}
            >
              Leads to thoughtful investigations and evidence-filled undercover operations resulting in a safer pharmaceutical environment globally.
            
            </motion.div>
              
            </p>
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="z-40 flex flex-col-reverse items-center w-full p-8 
      tablet:flex-row
      mobile:p-18 
      laptop:p-28">
        <div className="flex flex-col items-center flex-1 gap-5">
        {/* PiGear, PiGearFill  */}
        <h2 className='font-bold text-center text-md 
          laptop:text-xl 
          hd:text-xl'
        >
          See our <span className='text-primary-300'>services</span> in full.
        </h2>

        <Link to='/dmrs-fe/thailand#services_th'>
          <Button variant='outline'>Our Services</Button>
        </Link>
          
        </div>
      </section>

    </div>
  )
}

export default Australia