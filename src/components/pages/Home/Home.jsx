import React, { useState } from 'react';
import encrypt from '../../../assets/encrypt.png'
import hide from '../../../assets/hide.png'
import retrieve from '../../../assets/retrieve.png'
import loading from '../../../assets/loader.gif'
import Process from './Process'
import HomeHeading from './HomeHeading';
import Steg from './Steg';


const Home = () => {

  const [load, setLoad] = useState(false);

  const process = [
    {
      heading: "Secure Encryption",
      desc: "Protect messages with advanced encryption for ultimate privacy.",
      img: encrypt
    },
    {
      heading: "Stealthy Embedding",
      desc: "Hide data in images without visible alterations.",
      img: hide
    },
    {
      heading: "Easy Retrieval",
      desc: "Effortlessly extract hidden messages with perfect accuracy.",
      img: retrieve
    },
  ]


  return (
    <section className='homepage relative w-full pt-10 lg:pt-28 px-10 grid grid-cols-1 grid-rows-3 lg:grid-cols-6 lg:grid-rows-1 gap-16'>
      <div className={`loader z-50 h-screen w-full flex flex-col items-center justify-center pb-28 lg:pb-10 bg-[#ffffff28] top-0 left-0 text-white ${load ? "fixed" : "hidden"}`}>
        <img className='w-[80px] h-[80px]' src={loading} alt="" />
        <p className='bg-[#0000001a] font-medium'>Wait for a moment 😊</p>
      </div>
      {/* LEFT SECTION */}
      <HomeHeading />

      {/* MIDDLE SECTION */}
      <Steg setLoad={setLoad}/>

      {/* RIGHT SECTION */}
      <div className="overview-container lg:col-span-2 flex flex-col gap-10 mt-10">
        {
          process.map(({ heading, desc, img }) => (
            <Process key={heading} heading={heading} desc={desc} img={img} />
          ))
        }
      </div>
    </section>
  )
}

export default Home