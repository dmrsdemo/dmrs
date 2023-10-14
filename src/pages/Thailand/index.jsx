/* eslint-disable no-mixed-spaces-and-tabs */
import Hero from "../../components/Hero"
import Button from '../../components/Button'
import { IntelligenceAnalysts, BussinessIntelligence, UndercoverOperations } from "../../components/Svgs"
import Services from "./components/Services"
import BgTextMarquee from "./components/BgTextMarquee"
import OtherServices from "./components/OtherServices"
import GridFiller from "../Home/components/GridFiller"
import TryComponent from "./components/TryComponent"
import { useEffect, useRef } from "react"
import { Link, useLocation } from 'react-router-dom';

import { motion } from 'framer-motion'
import ColoredGrid from "../../components/ColoredGrid"
import SecondSection from "./components/SecondSection"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -80
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.3,
      duration: .7
    }
  })
}

const Thailand = () => {
    let size = '300';
    const blockCount = new Array(28);
    const blockRef = useRef([]);
    const location = useLocation();

    useEffect(() => {
      // Check if the URL contains the hash for the "services_th" section
      if (location.hash === '#services_th') {
        // Scroll to the "services_th" section
        const servicesThElement = document.getElementById('services_th');
        if (servicesThElement) {
          servicesThElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    
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

    const services = [ 
      {
        name:<p className="self-start font-bold">Intelligence</p>, 
        icon:<IntelligenceAnalysts width={size} height={size} />,
        content: <p className="text-sm">We are the industry leaders in manual intelligence collection, product monitoring and global investigative work protecting Fortune 500 companies with a worldwide footprint.</p>,
        subContent: 
        [
          {
            title: 'Online Intelligence Data Collection and Analysis',
            description: 'Unique manual online intelligence monitoring service. Intelligent intelligence protecting your products and company online. All data collected is secured and displayed within a SharePoint environment for access 24/7 with corporate visual presentations linked to the raw data collected.',
          },
          {
            title: 'Intellectual Property Protection',
            description: 'Many global Fortune 500 companies leave their trademark, copyright and intellectual property protection in our hands. Many companies in the worldwide pharmaceutical marketplace trust us to protect them with our hands-on manual intelligence and investigative consultancy.',
          },
        ]
      }, 
      {
        name:<p className="self-start font-bold">Research</p>,
        icon:<BussinessIntelligence width={size} height={size} />,
        content: <p className="text-sm">If you have a problem whether it is offline or online we proactively research using our research methodology and tools to give you an appropriate and considered answer.</p>,
        subContent: 
        [
          {
            title: 'Business Intelligence and Research',
            description: 'Background checks within the geographical area of your concern involving in-depth overt and covert research being conducted resulting in fact driven reporting you can rely on.',
          },
        ]
      }, 
      {
        name:<p className="self-start font-bold">Investigations</p>, 
        icon:<UndercoverOperations width={size} height={size} />,
        content: <p className="text-sm">We investigate your specific problem are experienced in correct evidence gathering procedures and are aware of the complex skills required to ensure that the integrity of a company is never placed in doubt.</p>,
        subContent: 
        [
          {
            title: 'Online Investigations',
            description: 'Dan Murdoch Risk Services has set the "industry standard" in online investigations conducting research and pretext engagement leading to undercover investigations and evidence collection on a global footing.',
          },
        ]
      }, 
    ]


  return (
    <div className="flex flex-col items-center justify-center w-full bg-white overflow-clip">
      <Hero>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex flex-col w-full h-full">

            <ColoredGrid />

            <div className="absolute top-0 left-0 z-40 w-3/4 h-full opacity-50 bg-gradient-to-r from-black via-black to-transparent"></div>

            {/* actual hero */}
            <div className="z-50 relative flex flex-col items-center overflow-auto h-full w-full gap-2 py-[calc(4rem+2rem)] text-white px-10 laptop:px-28">


              <div className="absolute z-50 hidden scale-110 -rotate-90 laptop:block bottom-28 right-28">
                <div className="flex items-center gap-5 animate-ltr">
                  <BsArrowLeft className='scale-x-[150%]' />
                  <p className='whitespace-nowrap'>Scroll Down</p>
                </div>
              </div>


              <div className="flex flex-col items-center w-full gap-10 laptop:gap-20 laptop:flex-row">
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
                  className='text-base text-center items mobile:text-left laptop:hidden'>
                    Dan Murdoch Risk Services
                  </motion.p>

                <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="hidden laptop:flex flex-col min-w-[15rem] rounded-lg overflow-hidden w-full">
                    <Link to="thailand" className='flex items-center justify-center p-2 py-5 font-medium text-center transition-all bg-white hover:h-full h-1/2 text-background-dark' >Our Services</Link>
                    <Link to="contact" className='flex items-center justify-center gap-4 p-2 py-5 font-medium text-center transition-all hover:h-full h-1/2 hover:brightness-110 bg-primary-300 text-background-dark' >Get Started  <BsArrowRight className="scale-150" /> </Link>
                </motion.div>
              </div>

              <div className="flex flex-col w-full h-full gap-10 tablet:flex-row tablet:mt-10 laptop:flex-col laptop:self-start">

                <motion.p
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .2, duration: 1, ease: 'easeOut' }}
                  className='hidden text-base mobile:text-left laptop:block'>Dan Murdoch Risk Services</motion.p>

                <motion.div
                  initial={{ x: -450 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .4, duration: 1, ease: 'easeOut' }}
                  className="flex flex-col items-center justify-center gap-1 
                  tablet:w-1/2
                  laptop:mt-auto laptop:items-start ">
                  <p className='z-10 text-md laptop:text-xl'>THAILAND</p>
                  
                </motion.div>

                <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="flex 
                  tablet:w-1/2
                  laptop:hidden flex-col min-w-[15rem] rounded-lg overflow-hidden w-full mt-auto">
                    <Link to="thailand" className='flex items-center justify-center p-2 py-5 font-medium text-center transition-all bg-white hover:h-full h-1/2 text-background-dark' >Our Services</Link>
                    <Link to="contact" className='flex items-center justify-center gap-4 p-2 py-5 font-medium text-center transition-all hover:h-full h-1/2 hover:brightness-110 bg-primary-300 text-background-dark' >Get Started  <BsArrowRight className="scale-150" /> </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </Hero>

      {/* DMRS Thailand section */}
      <section className="navTrigger">
        <div 
          className="relative flex flex-col w-full gap-6 px-6 py-8 h-fit mobile:py-10 mobile:px-12 mobile:h-fit mobile:flex-col tablet:items-center tablet:px-12 tablet:flex-row laptop:p-20 laptop:gap-24 desktop:min-h-screen desktop:gap-20 desktop:px-24 z-20">
          <div className="flex w-full h-[300px] bg-gray-200 rounded-tl-[2rem] rounded-br-[2rem] tablet:h-[calc((3/5)*100vh)] tablet:w-1/2 laptop:w-1/2 tablet:rounded-tl-[4rem] tablet:rounded-br-[4rem] overflow-hidden">
            <img src="./images/dmrs-thailand.webp" alt="" className="object-cover w-full h-full"/>
          </div>
          <img src="/images/thailand-map.png" alt="" className='absolute opacity-50 h-full brightness-90 -z-10 top-0 right-0 hidden mobile:block laptop:right-[20%]' />

          <motion.div 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            custom={1}
            className="z-10 flex flex-col justify-center w-full gap-4 mobile:w-full mobile:gap-4 tablet:w-1/2 tablet:gap-10">
            <h2 className="flex flex-col text-lg font-bold mobile:text-xl tablet:text-xl">Dan Murdoch Risk Services <strong className="text-lg font-bold text-primary-300 mobile:text-2xl tablet:text-2xl">Thailand.</strong></h2>
            <div className="flex flex-col gap-4 text-xs mobile:text-sm laptop:text-sm desktop:text-base">
              <p><strong className="text-accent-500">DMRS</strong> <strong className="text-primary-300">Thailand</strong> Co. Limited is based in Thailand with staff also in the Philippines, Australia, Hong Kong and China with trusted and verified agents in many global locations.</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* DMRS Thailand Section 2 */}
      <section className="flex items-center justify-center relative overflow-hidden">
        <motion.div
          whileInView={{ opacity: [0,1], transition: { duration: 1, delay: 0.5 }}} 
          viewport={{once:true}}
          className="flex w-full gap-6 py-8 min-h-fit justify-center items-center
          before:absolute before:content-[''] before:top-0 before:bg-gradient-to-t before:from-background-dark before:to-white before:min-h-[5px] before:min-w-full after:z-10 
          after:absolute after:content-[''] after:bottom-0 after:bg-gradient-to-b after:from-background-dark after:to-white after:min-h-[5px] after:min-w-full before:z-10 
          mobile:py-14 mobile:px-12 mobile:h-fit mobile:flex-col 
          tablet:items-center tablet:px-24 tablet:flex-col 
          laptop:p-20 laptop:gap-24 laptop:w-full 
          desktop:w-[90%] desktop:min-h-screen desktop:gap-20 desktop:px-24
        ">
        <TryComponent />
          <SecondSection />
          <div className="absolute top-0 bg-gradient-to-t from-background-dark to-white min-h-[5px] min-w-full z-10" />
        </motion.div>
      </section>
      
      {/* Services */}
      <div id="services_th" className="pt-10">
        <motion.section 
          className="relative flex items-start min-w-full min-h-full pb-20 overflow-hidden align-middle 
          mobile:px-6 mobile:max-w-full 
          tablet:px-12 tablet:max-w-full
          tablet:mt-10 
          laptop:gap-10"
          variants={fadeInAnimationVariants}
          initial="initial"
          id="services_th"
          whileInView="animate"
          viewport={{once:true}}
          custom={1}
          >
          <div className="absolute left-0 grid w-full h-full grid-cols-3 -top-10 
            mobile:grid-cols-4 
            desktop:grid-cols-8">
            <GridFiller cellCount={40} cellClass={'border border-background-dark/5'} />
          </div>
          <div className="flex flex-col h-full gap-6 px-6
              mobile:px-6  
              tablet:px-6 
              laptop:px-12 
              desktop:px-[4.5rem]">
            <div className="flex flex-col items-start gap-2">
              <h2 className="z-10 text-lg font-bold mobile:text-xl laptop:text-xl">Services</h2>
              <p
                className="z-10 gap-1 text-sm mobile:text-xs desktop:text-xs"
              >
                The services DMRS offers fall into three categories
                <motion.span className="font-bold" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={2}> INTELLIGENCE,</motion.span> 
                <motion.span className="font-bold" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={4}> INVESTIGATIONS,</motion.span> 
                <motion.span className="font-bold" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={6}> RESEARCH.</motion.span> 
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <motion.div 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView={"animate"}
                viewport={{once:true}}
                custom={6}
                className="z-10 grid grid-rows-1 gap-4 fill-black justify-center w-full
                mobile:grid mobile:grid-rows-1 mobile:gap-4
                tablet:grid tablet:grid-cols-2 tablet:gap-6
                desktop:grid-cols-3"
              >
                {services.map((item, index) => <Services key={index} name={item.name} icon={item.icon} content={item.content} subContents={item.subContent}/> )}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Other Services */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-10 mb-10 px-6
          mobile:px-6 mobile:max-w-full 
          tablet:px-12 tablet:max-w-full
          tablet:mt-10 
          laptop:gap-10"
        >
        <motion.div className="flex flex-col items-start gap-2 px-6
          mobile:px-6  
          tablet:px-6 
          laptop:px-12 
          desktop:px-[4.5rem]"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={4}
        >
          <h2 className="z-10 font-bold text-md mobile:text-xl laptop:text-xl">Other Services</h2>
          <p className="z-10 text-sm mobile:text-xs desktop:text-base">However, as an additional service to our partners, we offer further unique capabilities such as -</p>
          <OtherServices /> 
        </motion.div>
      </section>

    </div>
    
  )
}

export default Thailand