import React from 'react'
import caseStudyImage from '../assets/confidental.jpg'

const CaseStudies = () => {
  return (
    <section id='Case Study' className='px-4 py-10 md:py-14'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8'>
        {/* Content (Left) */}
        <div className='md:w-1/2'>
          <h2 className='text-2xl md:text-3xl font-bold text-red-600 mb-4'>
            Case Studies
          </h2>
          <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
            Relevant case studies can be presented on a case-to-case basis, in
            order to protect the confidentiality agreements with our clients.
          </p>
        </div>

        {/* Image (Right) */}
        <div className='md:w-1/2'>
          <img
            src={caseStudyImage}
            alt='Case Studies'
            className='w-full rounded-xl shadow-md object-cover max-h-72'
          />
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
