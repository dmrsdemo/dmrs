import React, { useEffect, useRef, useState } from 'react'
import FormInput from './Form/FormInput';
import Button from './Button';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { toast } from 'react-toastify';
const Footer = () => {
    const location = useLocation();

    const defaultFormData = { name: '', email: '', message: '' };
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const path = location.pathname;
    const captchaRef = useRef(null);

    const handleFormSubmit = async (e) => {
        setSending(true);

        e.preventDefault();
        const token = captchaRef.current.getValue();

        try {
            const response = await axios.post('https://yourintell.com/php/email.php', { ...formData, token });
            const { data, status } = response;
            setFormData(defaultFormData);
            toast.success(data.message)
        } catch (error) {
            const { data, status } = error.response;
            toast.error(data.message)
        }

        setSending(false);
        captchaRef.current.reset();
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
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="/">
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="/thailand">
                        DMRS Thailand
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="/australia">
                        DMRS Australia
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-sm laptop:text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-sm laptop:text-base hover:bg-white/20 w-full hover:px-3'} to="/vpn">
                        DMRS VPN
                    </NavLink>
                </div>

                <div className="flex items-end justify-between mt-10 text-xs whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                        <NavLink className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="policy">Privacy Policy</NavLink>
                        <p className='hidden'>|</p>
                        <NavLink className={({ isActive }) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="terms">Terms & Conditions</NavLink>
                    </div>

                    <p>&copy; 2023 Yourintell.com</p>
                </div>
            </div>

            {
                path != "/contact"
                    ? <>
                        <div className="min-w-[1px] w-[1px] bg-white min-h-full"></div>

                        <div className="flex flex-col flex-1 gap-8">

                            <div className="flex items-center justify-center w-1/2 laptop:hidden">
                                <img src="./images/logo-1.png" alt="" />
                            </div>

                            <h2 className='text-xl tablet:text-3xl text-left text-white'>CONTACT <span className='text-accent-500'>US</span></h2>

                            <form className='flex flex-col gap-8 text-xs mobile:text-sm' onSubmit={handleFormSubmit}>
                                <FormInput className="text-background-light active:!bg-black" label='Name' name='name' placeholder='Enter your name' onInput={handleOnInput} value={formData.name} number="01" />
                                <FormInput className="text-background-light active:!bg-black" label='Email Address' name='email' placeholder='Enter your email address' onInput={handleOnInput} value={formData.email} number="02" />
                                <FormInput className="text-background-light active:!bg-black" label='Message' name='message' placeholder='Leave us a message!' onInput={handleOnInput} value={formData.message} number="03" />

                                <ReCAPTCHA ref={captchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} />
                                <Button disabled={sending}>
                                    {!sending ? "Send us a message!" : 'Sending...'}
                                </Button>
                            </form>
                        </div>
                    </>
                    : <></>
            }
        </div>
    )
}

export default Footer