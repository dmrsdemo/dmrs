import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef(null);
  const ctaRef = useRef(null);
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setisTablet(false)
    } else {
      setisTablet(true)
    }

    const updateMedia = () => {
      if (window.innerWidth > 640) {
        setisTablet(false);
      } else {
        setisTablet(true);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, [])

  useEffect(() => {

    const updateNavColor = () => {
      const navTrigger = document.querySelector('.navTrigger');
      const nav = navRef.current;
      const cta = ctaRef.current;

      if (!nav && !cta) {
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const navTriggerRect = navTrigger.getBoundingClientRect();

      if (navRect.bottom >= Math.floor(navTriggerRect.top)) {
        nav.classList.add('bg-background-dark');

        if (!cta) return;
        cta.classList.add('max-w-[50rem]');
        cta.classList.remove('hidden');
      } else {
        nav.classList.remove('bg-background-dark');

        if (!cta) return;
        cta.classList.remove('max-w-[50rem]');
        cta.classList.add('hidden');
      }
    }

    window.addEventListener('scroll', () => {
      updateNavColor();
    })

    updateNavColor();

  }, [])

  return (
    isTablet ? <MobileNavbar nav={navRef} /> : <DefaultNavbar nav={navRef} cta={ctaRef} />
  )
}

const DefaultNavbar = ({ nav, cta }) => {
  return (
    <div ref={nav} className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-10 text-xs text-white laptop:px-28">
      <img src="./images/logo-1.png" className='h-3/4' alt="" />

      <div className="flex items-center gap-8">
        <NavLink className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="/dmrs/">
          Home
        </NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="australia">
          DMRS Australia
        </NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="thailand">
          DMRS Thailand
        </NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="vpn">
          DMRS VPN
        </NavLink>

        
        <NavLink ref={cta} to={'./contact'} className='hidden overflow-hidden transition-all duration-1000 max-w-0 whitespace-nowrap'>
          <Button size='xs' className="m-1">Get Started</Button>
        </NavLink>
      </div>
    </div>
  )
}

const MobileNavbar = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div ref={nav} className="fixed top-0 left-0 z-50 flex w-full h-16 px-6 text-sm text-white bg-background-dark">
      <div className="z-50 flex items-center justify-between w-full">
        <img src="./images/logo-1.png" className='h-3/4' alt="" />

        <div className="flex gap-2">
          <NavLink to={'./contact'} className='whitespace-nowrap'>
            <Button size='xs' className="m-1">Get Started!</Button>
          </NavLink>
          <button className='text-lg' onClick={() => { setIsOpen(!isOpen) }}>=</button>
        </div>
      </div>

      <div className={`absolute top-0 left-0 z-40 pt-16 bg-background-dark text-white w-full transition-[height] ease-out duration-200 overflow-hidden ${isOpen ? 'h-[100vh]' : 'h-0'}`}>
        <div className="flex flex-col items-center justify-center w-full gap-5 text-md">
          <NavLink onClick={() => { setIsOpen(false) }} className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="/dmrs/">
            Home
          </NavLink>

          <NavLink onClick={() => { setIsOpen(false) }} className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="australia">
            DMRS Australia
          </NavLink>

          <NavLink onClick={() => { setIsOpen(false) }} className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="thailand">
            DMRS Thailand
          </NavLink>

          <NavLink onClick={() => { setIsOpen(false) }} className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="vpn">
            DMRS VPN
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar