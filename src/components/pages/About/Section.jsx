
const Section = ({heading, para1, para2=null, para3=null, para4=null, para5=null, para6=null}) => {
    return (
        <div className={`${heading} mb-14`}>
            <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>{heading}</h1>
            <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                {para1}
                {para2 && <><br /><br />{para2}</>}
                {para3 && <><br /><br />{para3}</>}
                {para4 && <><br /><br />{para4}</>}
                {para5 && <><br /><br />{para5}</>}
                {para6 && <><br /><br />{para6}</>}
            </p>
        </div>
    )
}

export default Section