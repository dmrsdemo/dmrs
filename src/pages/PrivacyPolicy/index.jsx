import React from 'react'
import Paragraph from './Components/Paragraph'

const PrivacyPolicy = () => {
  const paragraphs = [
    {
      content:'When accessing our Website, Dan Murdoch Risk Services will learn certain information about you during your visit. How we will handle information we learn about you depends upon what you do when visiting our site.If you visit our site to read or download information on our pages, we collect and store only the following information about you:', 
      subParagraph: 
      [
        {
          content: 'The name of the domain from which you access the Internet',
        },
        {
          content: 'The date and time you access our site',
        },
        {
          content: 'The Internet address of the website you used to link directly to our site',
        },
        {
          content: 'No information is stored about visitors to this site',
        },
      ]
    },
    {
      content:'If you identify yourself by sending us an e-mail containing personal information, then the information collected will be solely used to respond to your message.The information collected is for statistical purposes. Dan Murdoch Risk Services may use software programs to create summary statistics, which are used for such purposes as assessing the number of visitors to the different sections of our site, what information is of most and least interest, determining technical design specifications, and identifying system performance or problem areas.', 
    },
    {
      content:'For site security purposes and to ensure that this service remains available to all users, Dan Murdoch Risk Services uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.', 
    },
    {
      content:'Dan Murdoch Risk Services will not obtain personally-identifying information about you when you visit our site, unless you choose to provide such information to us, nor will such information be sold or otherwise transferred to unaffiliated third parties without the approval of the user at the time of collection.', 
    },
  ]

  return (
    <section className='navTrigger'>
      <div className='flex bg-white flex-col w-full gap-6 px-6 py-24 h-fit mobile:py-24 mobile:p-12 mobile:h-fit mobile:flex-col tablet:p-24 tablet:flex-col laptop:px-20 laptop:py-20 laptop:gap-12 desktop:gap-10 desktop:p-36'>
        <div>
          <h1 className='z-10 text-xl font-bold mobile:text-left mobile:text-2xl tablet:text-2xl'>PRIVACY POLICY</h1>
          <h2 className='z-10 text-sm text-accent-800 font-bold mobile:text-left mobile:text-base tablet:text-base'>Dan Murdoch Risk Services</h2>
        </div>
        <ul className='flex flex-col gap-6'>
          {paragraphs.map((item, index) => <Paragraph key={index} content={item.content} subParagraph={item.subParagraph ?? ''} /> )}
        </ul>
      </div>
    </section>
  )
}

export default PrivacyPolicy