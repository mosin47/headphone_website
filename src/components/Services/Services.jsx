import React from 'react'
import Icon1 from '../../assets/icons/obj1.png'
import Icon2 from '../../assets/icons/obj2.png'
import Icon3 from '../../assets/icons/obj3.png'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'


export const fadeup = (delay) => {
  return {
    hidden:{
      opacity: 0,
      y: 100,
    },
    show:{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  }
}
const ServicesData = [
  {
    id: 1,
    icon: Icon1,
    title: "Security",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.",
    delay: 0.5,
  },
  {
    id: 2,
    icon: Icon2,
    title: "Guarantee",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.",
    delay: 0.8,
  },
  {
    id: 3,
    icon: Icon3,
    title: "Afforability",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.",
    delay: 1.1,
  },
]
const Services = () => {
  return (
    <>
      <section className='bg-gray-100 font-poppins py-8'>
        <div className="contanier py-14">
          <motion.h1
          variants={fadeup(0.2)}
          initial='hidden'
          whileInView='show'
          className='text-3xl font-bold text-center pb-10'>Services</motion.h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {ServicesData.map((item) => (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                  ),
                }}
              >
                <motion.div
                variants={fadeup(item.delay)}
                initial="hidden"
                whileInView="show"
                className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white'>
                  <img src={item.icon} alt="" className='w-[100px] mb-4' />
                  <div className='text-center space-y-2'>
                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                    <p className='text-sm text-center text-black/75'>{item.subtitle}</p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services