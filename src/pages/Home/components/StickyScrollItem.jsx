import React from 'react'

const StickyScrollItem = ({children}) => {
  return (
    <div className="h-fit laptop:h-[calc(100vh-4rem)]">
        {children}
    </div>
  )
}

export default StickyScrollItem