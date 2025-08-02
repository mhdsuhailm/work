import React from 'react'
import scanImage from '../assets/scan.jpg'
import sprintImage from '../assets/growth.jpg'
import fundingImage from '../assets/funding1.jpg'

const engagementModels = [
  {
    title: 'Organization Health Scan',
    duration: '2–3 weeks',
    description: 'Core assessment + executive briefing',
    image: scanImage
  },
  {
    title: 'Growth Sprint',
    duration: 'Quarterly',
    description: 'Ongoing advisory + KPI tracking',
    image: sprintImage
  },
  {
    title: 'Funding Catalyst',
    duration: '8–12 weeks',
    description: 'For selected businesses',
    image: fundingImage
  }
]

const EngagementModels = () => {
  return (
    <section id='engagement-models' className='py-20 px-6 bg-white'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-red-600 mb-12'>
          Engagement Models
        </h2>

        <div className='grid gap-10 md:grid-cols-3'>
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-2xl shadow-lg p-10 transition-transform hover:-translate-y-2 duration-300'
            >
              <img
                src={model.image}
                alt={model.title}
                className='w-48 h-48 mx-auto mb-6 object-contain'
              />
              <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                {model.title}
              </h3>
              <p className='text-base text-red-600 font-medium mb-2'>
                {model.duration}
              </p>
              <p className='text-gray-700 text-lg'>{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngagementModels
