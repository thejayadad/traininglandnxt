'use client'
import React,{useState} from 'react'
import { motion } from 'framer-motion'
import {FiMenu, FiX} from "react-icons/fi"
import Link from 'next/link'
import Logo from '@/components/logo'

const routes = [
    { name: 'Program', id: 'program'},
    { name: 'Gallery', id: 'gallery'},
    { name: 'Calculator', id: 'calculator'},

]



const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='relative'>
        <button
        onClick={toggleMenu}
        >
            {isOpen ? (
                <FiX size={24} />
            ) :
                <FiMenu size={24} />
            }
        </button>
        <motion.div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white border-r border-slate-200 z-40 flex flex-col`}
        initial={{x: '-100%'}}
        animate={{x: isOpen ? 0 : '-100%'}}
        transition={{type: 'spring', stiffness: 300}}
        >
            <div className='flex items-center justify-center h-20 border-b border-slate-200'>
                <Logo />
            </div>
            <nav className='flex-grow flex flex-col items-center justify-center space-y-4'>
                {routes.map((route) => (
                    <Link key={route.id} href={`#${route.id}`}
                    className='nav'>
                        {route.name}
                    </Link>
                ))}
            </nav>
            <footer className='border-t border-slate-200 p-4 text-center'>
                <p className='text-sm font-extrabold tracking-widest'>
                    @2024 The TrainingLand
                </p>
            </footer>
        </motion.div>
    </div>
  )
}

export default MobileMenu