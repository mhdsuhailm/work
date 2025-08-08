import aboutImg from '../assets/about.jpg'

const AboutUs = () => {
  return (
    <section id='about' className='text-gray-800 py-1 px-4 md:px-20 relative bg-white mb-4'>
      {/* ABOUT SECTION */}
      <div className='grid md:grid-cols-2 gap-10 items-center mb-20'>
        <img src={aboutImg} alt='About Us' className='rounded-lg shadow-lg' />
        <div>
          <h4 className='text-red-600 text-sm font-semibold uppercase mb-2'>
            About Us
          </h4>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Digimidiya Management Consultants
          </h2>
          <p className='text-gray-700 mb-6'>
            We specialize in guiding technology companies across their growth
            lifecycle—from pre-seed startups to mature enterprises. Combining
            deep domain expertise with a pragmatic approach, we enable clients
            to optimize performance, secure funding, and build scalable business
            models.
          </p>
          <ul className='text-gray-700 list-disc list-inside space-y-2 mb-6'>
            <li>
              Cross-functional expertise in Core Engineering, FinTech, Emerging
              Tech, and SMBs
            </li>
            <li>Outcome-focused advisory approach</li>
            <li>Trusted by high-growth ventures and global tech leaders</li>
          </ul>
          <a
            href='#'
            className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition'
          >
            Find More About Us
          </a>
        </div>
      </div>

      {/* HOW WE SUPPORT */}
      <div className='text-center mb-10'>
        <h4 className='text-rose-600 text-sm font-semibold uppercase mb-2'>
          What You Get
        </h4>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
          How We Support
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {[
          { title: 'Optimize Performance', icon: '⚙️' },
          { title: 'Secure Funding', icon: '💰' },
          { title: 'Scale Business', icon: '📊' },
          { title: 'Tech Advisory', icon: '💡' }
        ].map((item, i) => (
          <div
            key={i}
            className='bg-rose-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition'
          >
            <div className='text-5xl mb-4'>{item.icon}</div>
            <h3 className='text-rose-700 font-bold text-xl mb-2'>
              {item.title}
            </h3>
            <p className='text-gray-700 text-sm'>
              We bring domain expertise and a data-driven approach to support
              your growth journey.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutUs
