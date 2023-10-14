import React from 'react'
import SubParagraph from './SubParagraph'

const Paragraph = ( { content, subParagraph} ) => {
  

  return (
    <div className='flex flex-col gap-6'>
      <li>
        <p>{content}</p>
      </li>
        {subParagraph ? <ol className='pl-10 list-decimal'> {subParagraph.map((item, index) => <SubParagraph key={index} content={item.content} /> )} </ol>: ''}
    </div>
  )
}

export default Paragraph