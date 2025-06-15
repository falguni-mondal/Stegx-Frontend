import React from 'react'

const Process = ({heading, desc, img}) => {
    return (
        <div key={img} className="encrypt-desc text-[#dedede] lg:ml-10 flex lg:block flex-col items-center">
            <img className='w-[30px] h-[30px] object-cover' src={img} alt="" />

            <div className='neue-txt flex lg:block flex-col items-center text-center lg:text-left'>
                <h3 className='text-[1.050rem] font-bold mb-1 mt-2 tracking-tight'>{heading}</h3>
                <p className='w-[70%] lg:w-[80%] leading-none tracking-tighter text-[#cfcfcf]'>{desc}</p>
            </div>
        </div>
    )
}

export default Process