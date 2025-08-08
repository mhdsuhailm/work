import React from 'react'
import techImg from '../assets/technology.png'
import engImg from '../assets/engineer.jpg'

const industries = [
  {
    title: 'Technology & Digital Innovation',
    image: techImg,
    points: [
      'Artificial Intelligence & Machine Learning',
      'SaaS & Enterprise Platforms',
      'FinTech & InsurTech',
      'IoT & Edge Computing',
      'Cybersecurity',
      'Blockchain & Digital Assets',
      'HealthTech & MedTech'
    ]
  },
  {
    title: 'Engineering, EPC & Industrial Sectors',
    image: engImg,
    points: [
      'Oil & Gas',
      'Power & Energy (Conventional & Renewable)',
      'Water & Wastewater Infrastructure',
      'Transport & Urban Infrastructure',
      'Industrial Manufacturing',
      'Mining, Metals & Heavy Engineering'
    ]
  }
]

const IndustryFocus = () => {
  return (
    <section className='py-10 px-4 bg-white' id='industry'>
      <h2 className='text-2xl font-bold text-center text-red-600 mb-8'>
        Industry Focus Areas
      </h2>
      <div className='grid md:grid-cols-2 gap-6 justify-center'>
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className='rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 border border-red-100 w-full max-w-md mx-auto'
          >
            <img
              src={industry.image}
              alt={industry.title}
              className='w-full h-40 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-red-700 mb-2'>
                {industry.title}
              </h3>
              <ul className='list-disc list-inside text-sm text-gray-700 space-y-1'>
                {industry.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IndustryFocus
