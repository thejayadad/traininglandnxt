'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='min-h-screen mt-20'>
      <div className='px-8 flex flex-col mx-auto max-w-screen-lg justify-center items-center'>
        <motion.div
        initial={{opacity: 0, y:-50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: .5}}
        >
        <Image
        src='/hero.png'
        alt='hero'
        width={500}
        height={500}
        className='lg:w-4/6 md:w-3/6 w-5/6 object-cover object-center rounded'
        />
        </motion.div>
        <div className='text-center lg:w-2/3 w-full'>
          <motion.h1 
              initial={{opacity: 0, y:-50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: .5, delay: 0.2}}
          className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Elevate Your Skills with Online Training
          </motion.h1>
          <motion.p
              initial={{opacity: 0, y:-50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: .5, delay: 0.4}}
          className='mb-8 leading-relaxed'>
            Join our community of learners and gain hands-on experience in various. Our trainers are interactive, engaging, and practical to help you reach your fitness needs.
          </motion.p>
        <div className='flex items-center justify-center space-x-4'>
        <motion.div
              initial={{opacity: 0, y:-50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: .5, delay: 0.6}}
          >

            <Link href='/login'
            className='w-full text-center text-white bg-gray-900 border py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              SignUp
            </Link>    
          </motion.div>
          <motion.div
              initial={{opacity: 0, y:-50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: .5, delay: 0.8}}
          >

            <Link href='/login'
            className='w-full text-center text-gray-900 bg-white border py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Login
            </Link>    
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero