import React from 'react'
import headphone1 from '../../assets/headphone.png'
import headphone2 from '../../assets/headphone2.png'
import headphone3 from '../../assets/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { delay, motion, easeInOut, AnimatePresence } from 'framer-motion'
import { div } from 'framer-motion/client'



const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            }
        }
    }
}

const HeadphoneData = [
    {
        id: 1,
        title: "Headphone Wireless",
        price: "$200",
        image: headphone1,
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.",
        model: "Model Brown",
        bgcolor: "#8b5958",
    },
    {
        id: 2,
        title: "Headphone Wireless 2",
        price: "$200",
        image: headphone2,
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.",
        model: "Lime Green",
        bgcolor: "#638153",
    },
    {
        id: 3,
        title: "Headphone Wireless 3",
        price: "$200",
        image: headphone3,
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate.",
        model: "Ocean Blue",
        bgcolor: "#5d818c",
    },
]


const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeadphoneData[0])

    const handleActiveData = (data) => {
        setActiveData(data);
    };


    return (
        <>
            <section className='bg-brandDark text-white font-varela'>
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                    {/* Headphone info */}
                    <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
                        <div className='space-y-5 md:text-left text-center'>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: 999,
                                        followSpeed: 0.5,
                                        scale: 10,
                                        rotate: -720,
                                        mixBlendMode: "difference",
                                    }}
                                >
                                    <motion.h1 key={activeData.id} variants={fadeUp(0.2)} initial='hidden' animate='show' exit='exit'
                                        className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}
                                    </motion.h1>
                                </UpdateFollower>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id} variants={fadeUp(0.3)} initial='hidden' animate='show' exit='exit'
                                    className='text-sm leading-loose text-white/80'>{activeData.subtitle}
                                </motion.p>
                            </AnimatePresence>
                            <AnimatePresence>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: activeData.bgcolor,
                                        zIndex: 999,
                                        followSpeed: 0.5,
                                        scale: 6,
                                        rotate: -720,
                                        backgroundElement: (
                                            <div>
                                                <img src={activeData.image} alt="" />
                                            </div>
                                        )
                                    }}
                                >
                                    <motion.button
                                        key={activeData.id} variants={fadeUp(0.2)} initial='hidden' animate='show' exit='exit'
                                        style={{ backgroundColor: activeData.bgcolor }}
                                        className='px-4 py-2 inline-block font-normal rounded-sm'
                                    >Buy And Listen</motion.button>
                                </UpdateFollower>
                            </AnimatePresence>
                            <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20 h-[1px] bg-white'></div>
                                <p className='uppercase text-sm' >Top Headphone for you</p>
                                <div className='w-20 h-[1px] bg-white'></div>

                            </div>
                            {/* headpone list */}
                            <div className='grid grid-cols-3 gap-10'>
                                {HeadphoneData.map((item) => {
                                    return (
                                        <UpdateFollower
                                            mouseOptions={{
                                                backgroundColor:item.bgcolor,
                                                zIndex: 999,
                                                followSpeed: 0.5,
                                                text:"View Details",
                                                textFontSize: "3px",
                                                scale: 5,
                                            }}  
                                        >
                                            <div key={item.id}
                                                onClick={() => handleActiveData(item)}
                                                className='grid grid-cols-2 place-items-center cursor-pointer'>
                                                <div>
                                                    <img src={item.image} alt=""
                                                        className='w-[200px]' />
                                                </div>
                                                <div className='space-y-2'>
                                                    <p className='text-base font-bold'>{item.price}</p>
                                                    <p className='text-xs font-normal text-wrap'>{item.model}</p>
                                                </div>
                                            </div>
                                        </UpdateFollower>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Headphone image */}
                    <div className='flex flex-col items-center justify-end'>
                        <AnimatePresence>
                            <motion.img
                                key={activeData.id}
                                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    x: 100,
                                    transition: { duration: 0.2 },
                                }}
                                src={activeData.image} alt=""
                                className='w-[300px]  md:w-[400px] xl:w-[600px]' />
                        </AnimatePresence>
                    </div>
                    {/* Whatsapp */}
                    <div className='text-3xl text-white fixed bottom-0 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference'>
                        <a href="">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
