import React from 'react'

const FormInput = ({id = "", name = "", label = "", value = "", placeholder = "", className = "", onInput, number=""}) => {
  return (
    <div className="flex flex-col gap-1 border-t border-secondary-800/20 pt-7 pb-3">
      <div>
        <span className='text-secondary-800/60 w-full'>{number}</span>
        <label className='text-sm relative pl-5' htmlFor={id}>{label}</label>
      </div>
      <input type="text" id={id} name={name} value={value} placeholder={placeholder} onInput={onInput} className={`py-2 ml-10 text-sm text-background-dark bg-transparent focus:outline-none placeholder:text-xs focus:bg-transparent ${className}`}/>
    </div>
  )
}

export default FormInput