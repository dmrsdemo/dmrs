import React, { useState } from 'react'
import OtherServicesItem from './OtherServicesItem'

const OtherServices = () => {
    const contents = [
        {
            name: 'Office 365 SharePoint Development',
            content: 'Experts in the setup and management of cloud computer services for law enforcement and private companies such as Office 365 together with SharePoint administration and management.'
        },
        {
            name: 'Anonymous Domain Name Registration',
            content: 'Registration of anonymous domain names for our clients, law enforcement, security and investigation consultants worldwide.'
        },
        {
            name: 'Anonymous Website Hosting',
            content: 'Hosting of pretext and websites anonymously only for our clients and industry personnel.'
        },
        {
            name: 'Covert Pretext Setups for Police and Investigative services worldwide.',
            content: 'Setup of a complete pretext facility such as pretext website construction, hosting, business address and location services.'
        },
        {
            name: 'Covert Website Design',
            content: 'Design and building a website to your required specifications.'
        },
        {
            name: 'Anonymous VPN and high end Proxy facility',
            content: 'Login to our servers from any country by any device including iPhone, ipad other mobile devices and laptops. Traveling to such countries as China, Middle Eastern countries using the VPN service gives you secure access to all your data and online internet content without restriction.'
        },
    ]

    const [hovering, setHovering] = useState(false);
    const [activeContent, setActiveContent] = useState(contents[0]);

    const handleSelectActive = (content) => {
        if (content.name === activeContent.name) return;

        const index = contents.findIndex((_content) => _content.name == content.name);
        setActiveContent(contents[index]);
    }

    return (
        <div className='z-10 flex-[1]' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div className="flex flex-col">
                {
                    contents.map((content, index) => <OtherServicesItem key={index} index={index} content={content} parentHover={hovering} active={content.name == activeContent?.name} handleSelectActive={handleSelectActive} />)
                }
            </div>
        </div>
    )
}

export default OtherServices