import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import ModelView from './ModelView'


const Model = () => {
  const [size, setSize] =  useState('small');
  const [Model, setModel] = useState({
    tittle: 'iphone 15 pro in Natural Titatinum ',
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  })
  useGSAP(()=>{
    gsap.to('#heading', {y:0, opacity:1})
  },[])
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1 id='heading' className='section-heading' >Take a closer look.</h1>

        <div className='flex flex-col items-center mt-5'>
          <div className='w-full h-[75vh]  md:h-[90vh] overflow-hidden'>
            <ModelView/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model