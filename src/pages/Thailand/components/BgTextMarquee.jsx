const BgTextMarquee = () => {
  const contents = ['INTELLIGENCE', 'RESEARCH', 'INVESTIGATION', 'OTHER SERVICES', 'INTELLIGENCE', 'RESEARCH']

  return (
    <div className="marquee flex flex-row gap-8 w-fit">
      {contents.map((content, index) => (
        <p className={"font-bold text-secondary-100/60 text-6xl z-0 whitespace-nowrap"} key={index}>{content}</p>
      ))}
    </div>
  )
}

export default BgTextMarquee