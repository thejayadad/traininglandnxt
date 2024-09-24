import React from 'react'
import Hero from './_components/hero/hero'
import ProgramSection from './_components/program/program'
import Calculator from './_components/calculator/calculator'
import Gallery from './_components/gallery/gallery'

const HomePage = () => {
  return (
    <section className='flex flex-col'>
      <Hero />
      <ProgramSection />
      <Calculator />
      <Gallery />
    </section>
  )
}

export default HomePage