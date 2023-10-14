import React, { useState } from 'react'
import FormInput from '../../components/Form/FormInput'
import Button from '../../components/Button'
import WorldMap from './components/WorldMap'

const ContactUs = () => {

    const handleOnInput = (e) => {
        const inputName = e.target.name;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [inputName]: e.target.value
        }));
    } 
    
    const [formData, setFormData] = useState({ name: '', email: '', services:'' ,message: '' });

    return (
        <div className="flex gap-10 w-full bg-background-light navTrigger laptop:gap-0 justify-center py-24
          mobile:py-24
          tablet:py-32
          laptop:py-40
        ">
            <div className="flex flex-col w-[90%] min-h-full 
              mobile:w-[90%]
              laptop:w-[80%] laptop:flex-row
              desktop:w-[70%]
            ">

              <div className='grid grid-cols-4 gap-10
                mobile:gap-10 
                tablet:gap-20
                laptop:gap-40
              '>
                <div className='col-span-4 mobile:col-span-4 laptop:col-span-3'>
                  <h1 className='text-lg text-background-dark font-bold
                    mobile:text-xl
                    tablet:text-3xl
                  '>
                    Start a Project with 
                    <span className='font-bold text-primary-300 text-lg pl-2
                      mobile:text-2xl
                      tablet:text-5xl
                    '>
                      DMRS
                    </span>
                  </h1>
                </div>
                <div className='grid grid-cols-1 gap-10 col-span-4
                mobile:grid-cols-1 mobile:gap-10
                laptop:grid-cols-4 laptop:gap-20
                '>
                  <form className="flex flex-col col-span-3 self-center flex-1 w-full gap-3 relative
                    mobile:col-span-1 
                    laptop:col-span-3
                  ">
                    <div className='border-b border-secondary-800/20 pb-3'>
                      <FormInput className='text-background-dark' label="What's your name?" name='name' placeholder='Enter your name' onInput={handleOnInput} value={formData.name} number="01"/>
                      <FormInput className='text-background-dark' label="What's your email address?" name='email' placeholder='Enter your email address' onInput={handleOnInput} value={formData.email} number="02"/>
                      <FormInput className='text-background-dark' label="What services are you looking for?" name='services' placeholder='Data Collection, Online Investigations, Business Intelligence' onInput={handleOnInput} value={formData.services} number="03"/>
                      <FormInput className='text-background-dark' label='Message' name='message' placeholder='Leave us a message!' onInput={handleOnInput} value={formData.message} number="04"/>
                    </div>
                    <button className="rounded-lg bg-primary-300 left-10 px-12 py-3 hover:bg-primary-200"><a href="mailto:test@gmail.com">Send it!</a></button>
                  </form>
                  <div className='grid col-span-1 gap-5
                    mobile:grid mobile:gap-10
                  '>
                    <div className='flex flex-col gap-1 '>
                      <p className='text-secondary-800/60 text-xs'>Contact Details</p>
                      <p className='text-background-dark'>dmrs.thailand@dmrs.com</p>
                      <p className='text-background-dark'>+8(02) 345 678</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p className='text-secondary-800/60 text-xs'>Business Details</p>
                      <p className='text-background-dark'>P.O. Box 37</p>
                      <p className='text-background-dark whitespace-nowrap'>Yannawa, Bangkok - 10120</p>
                      <p className='text-background-dark'>Thailand</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p className='text-secondary-800/60 text-xs'>Locations</p>
                      <p className='text-background-dark'>Thailand</p>
                      <p className='text-background-dark'>Hongkong</p>
                      <p className='text-background-dark'>Australia</p>
                      <p className='text-background-dark'>China</p>
                      <p className='text-background-dark'>Philippines</p>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
        </div>
    )
}

export default ContactUs