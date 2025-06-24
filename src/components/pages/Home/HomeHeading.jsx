import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeading = () => {
    return (
        <div className="heading-container lg:col-span-2 text-[#dedede]">
            <h1 className='heading-txt text-[5rem] w-full leading-none tracking-tighter'>Talk in Pixels Not in Words.</h1>
            <p className='heading-paragraph text-[1.2rem] leading-tight tracking-tighter mt-6'>Securely encode your confidential messages within images, ensuring privacy, stealth, and easy retrieval with our advanced steganography technology—fast, reliable, and undetectable.</p>
            <Link to="/about" className='block w-fit py-2 px-6 mt-8 rounded-lg border-[#dedede] border font-bold whiteglow-hover transition-all duration-500'>Learn More</Link>
        </div>
    )
}

export default HomeHeading