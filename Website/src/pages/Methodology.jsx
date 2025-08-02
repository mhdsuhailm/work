import React from 'react'
import methodologyImg from '../assets/methodology.jpg'

const OurMethodology = () => {
  return (
    <section className='py-8 px-4' id='methodology'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8'>
        {/* Left Image */}
        <div className='md:w-1/2'>
          <img
            src={methodologyImg}
            alt='Our Methodology'
            className='w-full h-72 object-cover rounded-xl shadow-lg'
          />
        </div>

        {/* Right Content */}
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-bold text-red-600 mb-4'>
            Our Methodology
          </h2>
          <p className='text-gray-800 text-base mb-4'>
            <strong className='text-gray-900'>
              The Business and Tech Growth Framework:
            </strong>
          </p>
          <p className='text-gray-800 text-base mb-2 font-semibold'>
            Key Differentiators:
          </p>
          <ul className='list-disc list-inside text-gray-700 text-sm space-y-1'>
            <li>Benchmark database</li>
            <li>DevOps and code quality metrics</li>
            <li>CxO-as-a-Service model</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OurMethodology
