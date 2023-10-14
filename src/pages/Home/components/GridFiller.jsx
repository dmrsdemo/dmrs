import React from 'react'

const GridFiller = ({cellCount = 0, cellClass}) => {
    const cellsArray = new Array(cellCount);
  return (
    cellsArray.fill(null).map((_, index) => 
        <div key={index} className={cellClass}></div>
    )
  )
}

export default GridFiller