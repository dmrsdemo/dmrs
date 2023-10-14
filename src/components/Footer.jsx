import React, { useState } from 'react'
import FormInput from './Form/FormInput';
import Button from './Button';
import { Link, NavLink, useLocation } from 'react-router-dom';
const Footer = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const path = location.pathname;
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
    }

    const handleOnInput = (e) => {
        const inputName = e.target.name;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [inputName]: e.target.value
        }));
    }

    return (
        <div className="flex flex-col-reverse text-white min-h-[calc(100vh-3.9rem)] bg-background-dark p-5 py-10 gap-10 z-[40] overflow-hidden laptop:flex-row">
            <div className="flex flex-col flex-1 gap-8">

                <div className="items-center hidden w-1/2 laptop:flex">
                    <img src="./images/logo-1.png" alt="" />
                </div>

                <div className="flex flex-col h-full gap-2">
                    <p className='text-xs text-accent-400 laptop:text-sm'>Navigation</p>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="/dmrs-fe/">
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="thailand">
                        DMRS Thailand
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="australia">
                        DMRS Australia
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="vpn">
                        DMRS VPN
                    </NavLink>
                </div>

                <div className="flex items-end justify-between mt-10 text-xs whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                        <NavLink className={({isActive}) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="policy">Privacy Policy</NavLink>
                        <p className='hidden'>|</p>
                        <NavLink className={({isActive}) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="terms">Terms & Conditions</NavLink>
                    </div>

                    <p>c 2021 Yourintell.com</p>
                </div>
            </div>

            {
                path != "/dmrs-fe/contact"
                ? <>
                    <div className="min-w-[1px] w-[1px] bg-white min-h-full"></div>

            <div className="flex flex-col flex-1 gap-8">
                
                <div className="flex items-center justify-center w-1/2 laptop:hidden">
                        <img src="./images/logo-1.png" alt="" />
                </div>
                
                <h2 className='text-xl tablet:text-3xl text-left text-white'>CONTACT <span className='text-accent-500'>US</span></h2>

                        <form action="#" className='flex flex-col gap-8 text-xs mobile:text-sm' onSubmit={handleFormSubmit}>
                            <FormInput className="text-background-light" label='Name' name='name' placeholder='Enter your name' onInput={handleOnInput} value={formData.name} number="01"/>
                            <FormInput className="text-background-light" label='Email Address' name='email' placeholder='Enter your email address' onInput={handleOnInput} value={formData.email} number="02"/>
                            <FormInput className='text-background-light' label="What services are you looking for?" name='services' placeholder='Data Collection, Online Investigations, Business Intelligence' onInput={handleOnInput} value={formData.services} number="03"/>
                            <FormInput className="text-background-light" label='Message' name='message' placeholder='Leave us a message!' onInput={handleOnInput} value={formData.message} number="04"/>
                            <Button size="sm" variant="outline"><a href="mailto:test@gmail.com">Send us a message!</a></Button>

                        </form>
                    </div>
                </>
                : <></>
            }
        </div>
    )
}

export default Footer