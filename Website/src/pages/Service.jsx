import { useState } from 'react'
import diagnostic from '../assets/diagnostic.jpg'
import advisory from '../assets/advisory.png'
import funding from '../assets/funding.jpg'
import cxoservice from '../assets/cxoservice.png'

const services = [
  {
    id: 1,
    title: 'Tech Company Diagnostic Assessment',
    image: diagnostic,
    brief:
      'We conduct a comprehensive 360° diagnostic assessment of your company to identify operational inefficiencies, growth blockers, and strategic gaps.',
    full: `Key Focus Areas:
- Financial Health
- Product Strategy
- Technical Operations
- Investment Readiness

Deliverables:
- KPI dashboard & runway analysis
- Product & roadmap recommendations
- Infrastructure optimization plan
- Investor-ready collateral

Engagement Duration:
Typically 2–4 weeks, depending on the level of services, presented in an executive presentation.`
  },
  {
    id: 2,
    title: 'Startup Advisory',
    image: advisory,
    brief:
      'We support early-stage startups with strong foundations in technology, go-to-market, and talent strategies.',
    full: `Core Advisory Areas:
- Feasibility Studies
- IP Strategy
- GTM Strategy
- Talent Architecture`
  },
  {
    id: 3,
    title: 'Growth & Funding Acceleration',
    image: funding,
    brief: `Whether you're preparing for Series A or expanding into new markets, Digimidiya equips you with strategic clarity and investor readiness.`,
    full: `Services Include:
- Capital Strategy & Fundraising
- Technical Due Diligence
- Strategic Partnerships & M&A`
  },
  {
    id: 4,
    title: 'CxO-as-a-Service',
    image: cxoservice,
    brief:
      'For companies without a full-time CxO, we offer senior leadership professionals as part of our advisory services.',
    full: `Benefits:
- Business planning
- Strategic directives definition
- Organization structure
- Financial planning
- Opportunity evaluation
- Product roadmap planning
- Engineering team mentoring
- Technology evaluation
- Board communications`
  }
]

const Services = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = id => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <div className='py-16 px-6' id='services'>
      <h2 className='text-3xl font-bold text-center text-red-700 mb-12'>
        Our Services
      </h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {services.map(service => {
          const isExpanded = expandedId === service.id
          return (
            <div
              key={service.id}
              className='bg-white rounded-2xl shadow-xl overflow-hidden transition hover:scale-105 duration-300 flex flex-col'
            >
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-48 object-cover object-center rounded-t-2xl'
              />
              <div className='p-6 flex-1 flex flex-col'>
                <h3 className='text-xl font-semibold text-red-700 mb-2'>
                  {service.title}
                </h3>
                <p className='text-gray-700 text-sm flex-1 whitespace-pre-line'>
                  {isExpanded ? service.full : service.brief}
                </p>
                <button
                  onClick={() => toggleExpand(service.id)}
                  className='mt-4 text-sm text-red-600 hover:underline self-start'
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
