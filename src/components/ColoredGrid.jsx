import { useEffect, useRef } from 'react'

const ColoredGrid = () => {

    function toggleBlock(selectedBlock) {
        if (selectedBlock.classList.contains('active') || !selectedBlock) return;

        selectedBlock.classList.add('fill');

        setTimeout(() => {
            selectedBlock.classList.remove('fill');
        }, (Math.random() * 2) * 5000);
    }
    const blockCount = new Array(28);
    const blockRef = useRef([]);



    useEffect(() => {
        const intervalId = setInterval(() => {
            const selectedBlock = blockRef.current[Math.floor(Math.random() * 25)];
            toggleBlock(selectedBlock);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])
    return (

        <>

            <div className="absolute w-full h-full bg-gradient-radial from-background-dark/20 to-background-dark z-[2]"></div>


            <div className="absolute top-0 left-0 grid w-full h-full grid-cols-7 z-[1] ">
                {
                    blockCount.fill(null).map((_, index) => <div ref={(el) => blockRef.current[index] = el} key={index} className='block border border-background-light/5'></div>)
                }
            </div>
        </>
    )
}

export default ColoredGrid