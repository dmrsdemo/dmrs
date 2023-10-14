import React, { useState } from 'react'
import WhatWeDoItem from './WhatWeDoItem'
import { motion } from 'framer-motion';

const variants = {
    initial: { transition: { staggerChildren: 0.07, delayChildren: 0.02 }, },
    inview: { transition: { staggerChildren: .10, ease: 'easeOut' }, },
}

const WhatWeDo = () => {
    const contents = [
        {
            name: 'Cyber Monitoring',
            content: 'Cyber product monitoring by trained intelligence analysts'
        },
        {
            name: 'Global Investigations',
            content: 'Worldwide Intellectual Property investigations'
        },
        {
            name: 'Undercover Operations',
            content: 'Undercover operations worldwide'
        },
        {
            name: 'Business Intelligence Background',
            content: 'Business Intelligence background checks'
        },
        {
            name: 'Research',
            content: 'Thoughtful Online Research'
        },
        {
            name: 'Risk Assessment',
            content: 'Risk Management assessments'
        },
        {
            name: 'Anonymous Hosting',
            content: 'Anonymous domain name registration and hosting services'
        },
        {
            name: 'VPN Access',
            content: 'Anonymous VPN internet access for our clients and the industry'
        },
        {
            name: 'Security Assessments',
            content: 'Enhancing protective measures systematically.'
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
        <div className='z-10 flex-1' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <motion.div
                variants={variants}
                initial="initial"
                whileInView="inview"
                className="flex flex-col">
                {
                    contents.map((content, index) => <WhatWeDoItem key={index} index={index} content={content} parentHover={hovering} active={content.name == activeContent?.name} handleSelectActive={handleSelectActive} />)
                }
            </motion.div>
        </div>
    )
}

export default WhatWeDo