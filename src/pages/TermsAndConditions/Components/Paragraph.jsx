import React from 'react'
import SubParagraph from './SubParagraph'

const Paragraph = ( { title, content, subParagraph } ) => {
  

  return (
    <div className='flex flex-col gap-6'>
      <li className='font-bold'>
          <p>{title}</p>
          <div className='font-normal flex flex-col gap-6'>{content}</div>
      </li>
        {subParagraph ? <ol className="pl-10 list-decimal flex flex-col gap-3">{subParagraph.map((item, index) => <SubParagraph key={index} content={item.content} /> )} </ol>: ''}
    </div>
  )
}

export default Paragraph