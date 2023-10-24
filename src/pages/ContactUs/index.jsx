import React, { useRef, useState } from 'react'
import FormInput from '../../components/Form/FormInput'
import Button from '../../components/Button'
import WorldMap from './components/WorldMap'
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isHuman, setIsHuman] = useState(false)
  const captchaRef = useRef(null);

  const handleFormSubmit = async (e) => {
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

  const captchaOnChange = async (e) => {
    if (!e) {
      setIsHuman(false)
      return;
    }

    const token = captchaRef.current.getValue();

    if (token) {
      const data = await fetch(`https://yourintell.com/email.php?token=${token}`,
        {
          method: 'GET',
        });
      if (data.ok) {
        const { response } = await data.json();

        if (response == 'success') {
          setIsHuman(true);
        } else {
          setIsHuman(false);
        }
      }
    }
  }


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
              Contact
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
            <form onSubmit={handleFormSubmit} className="flex flex-col col-span-3 self-center flex-1 w-full gap-3 relative
                    mobile:col-span-1 
                    laptop:col-span-3
                  ">
              <div className='border-b border-secondary-800/20 pb-3'>
                <FormInput className='text-background-dark' label="What's your name?" name='name' placeholder='Enter your name' onInput={handleOnInput} value={formData.name} number="01" />
                <FormInput className='text-background-dark' label="What's your email address?" name='email' placeholder='Enter your email address' onInput={handleOnInput} value={formData.email} number="02" />
                {/* <FormInput className='text-background-dark' label="What services are you looking for?" name='services' placeholder='Data Collection, Online Investigations, Business Intelligence' onInput={handleOnInput} value={formData.services} number="03"/> */}
                <FormInput className='text-background-dark' label='Message' name='message' placeholder='Leave us a message!' onInput={handleOnInput} value={formData.message} number="03" />
              </div>

              {isHuman ?
                <a className='w-full h-full' href={`mailto:${import.meta.env.VITE_EMAIL}?subject=DMRS&body=${formData.message}%0D%0DSincerely yours,%0D${formData.name}%0D${formData.email}`}>
                  <Button type="button" size="sm" variant="outline" className="w-full">
                    Send it!
                  </Button>
                </a>
                :
                <ReCAPTCHA ref={captchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={captchaOnChange} />
              }

            </form>
            <div className='grid col-span-1 gap-5
                    mobile:grid mobile:gap-10
                  '>
              {/* <div className='flex flex-col gap-1 '>
                      <p className='text-secondary-800/60 text-xs'>Contact Details</p>
                      <p className='text-background-dark'>dmrs.thailand@dmrs.com</p>
                      <p className='text-background-dark'>+8(02) 345 678</p>
                    </div> */}
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