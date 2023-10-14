import React, { useState } from 'react'

const NavAccordion = ({children, ...props}) => {
    const {label} = props;

    const [expanded, setExpanded] = useState(false);
    
    return (
        <div className="relative flex flex-col items-start justify-start">
            <p>{label}</p>

            <div className={`absolute flex gap-3 bg-background-dark w-screen left-0 top-[calc(100%+1rem)] ${expanded ? '' : ''}`}>
                <p>Test1</p>
                <p>Test1</p>
                <p>Test1</p>
                {children}
            </div>
        </div>
    )
}

export default NavAccordion