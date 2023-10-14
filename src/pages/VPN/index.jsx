import React from 'react'
import Hero from '../../components/Hero'
import ColoredGrid from '../../components/ColoredGrid'
import { motion } from 'framer-motion'
import FirstSectionItem from './components/FirstSectionItem'
// import VerticalProgress from '../../components/VerticalProgress'
// import VerticalProgressPoint from '../../components/VerticalProgressPoint'
import StaggeredLine from '../../components/StaggeredLine'
import { Link } from 'react-router-dom'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const _MainData = [
    {
        imageUrl: './images/server.webp',
        title: 'Why do we use our own virtual private network system?',
        content: 'There are many reasons someone would want to surf the internet anonymously. Many people think that internet privacy is only for those trying to hide something but that simply is not the case. Internet privacy is essential for normal people like you and professionals like us who value their identity and rights. As governments, search engines, and marketers use increasingly more aggressive methods for tracking what you do online; the need for internet privacy has increased. Government agencies continue to push the boundaries of what they collect and demand from internet service providers, search engines, and individual website owners.',
    },

    {
        imageUrl: './images/browse.webp',
        title: "How They're Tracking You",
        content: "Every time you go online you run the risk of identify theft. Even seemingly harmless tasks like checking email and the news open you up to vulnerabilities. Website owners and statistics tracking systems can pinpoint the sites you've visited last, your geographic location and details about your browser and operating system. Worse, spyware and malevolent data tracking systems called cookies can track even more information about your surfing habits. For example, most web browsers today can save passwords for the sites that you visit. While this feature is convenient for us, criminals can often find and use this information to access your email accounts, online banking, and credit card accounts",
    },

    {
        imageUrl: './images/hacker.webp',
        title: "Why They're Tracking You",
        content: "A large number of people are interested in your surfing habits; from marketing agencies to government agencies. Marketers want to know your buying habits in order to serve you more targeted offers. Governments may be interested in censoring the information you access. While not everyone tracking you may have evil intent, it is dangerous to leave your safety in the hands of others.",
    },

    {
        imageUrl: './images/security.webp',
        title: "How to Stop Them From Tracking You",
        content: "The best and perhaps only way for you to prevent this data collection is to surf the web anonymously. Anonymous surfing can be accomplished by using proxy servers that randomize your IP address as you surf the internet Proxy servers act as a middleman between you and the web sites you visit, preventing anyone from personally identifying you and your surfing habits. Protecting your internet privacy is essential for protecting you from those who wish to harm you. Using proxy servers is an effective way to do this.",
    },
]

const Vpn = () => {
    return (
        <div className="flex flex-col w-full bg-white">
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
                  <p className='z-10 text-xl laptop:text-xl'>VPN</p>
                  
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

            <section className='relative flex gap-10 p-10 overflow-hidden laptop:pl-28 navTrigger'>

                <div className="flex flex-col gap-16">
                    {_MainData.map((item, index) => <FirstSectionItem key={index} imageUrl={item.imageUrl} title={item.title} content={item.content} index={index} />)}
                </div>

            </section>
        </div>


    )
}

export default Vpn