import React from 'react'

const Button = ({
    variant = 'default',
    size = "sm", 
    backgroundColor = "primary-300",
    borderColor = "primary-300",
    textColor = "white",
    children,
    ...props }) => {

    const { className } = props;

    const variants = {
        variant: {
            default: `bg-primary-300 text-background-dark ring-1 ring-primary-300`,
            outline: `bg-transparent text-primary-300 ring-1 ring-primary-300 hover:bg-primary-300/10`,
            underline: '',
        },

        size: {
            xs: 'text-xs py-[0.4375rem] px-[.875rem]',
            sm: 'text-sm py-[0.5rem] px-[1rem]',
            md: 'text-md py-[0.6875rem] px-[1.375rem]',
            lg: 'text-lg py-[1.1875rem] px-[2.375rem]',
            xl: 'text-xl py-[1.594rem] px-[3.188rem]',
        },

        default: 'rounded-lg cursor-pointer transition-all hover:brightness-110 active:brightness-90'
    }
    
    return (
        <button className={`${variants.variant[variant]} ${variants.size[size]} ${variants.default} ${className || ''}`}>
            {children}
        </button>
    )
}

export default Button