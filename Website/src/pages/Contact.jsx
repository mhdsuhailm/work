import React from 'react'

const ContactDetails = () => {
  return (
    <section id='contact' className='bg-gray-900 text-white py-16 px-6'>
      <div className='max-w-2xl mx-auto text-center'>
        <h3 className='text-3xl font-bold text-red-500 mb-6'>Contact Us</h3>

        <div className='text-base text-gray-200 leading-relaxed space-y-4'>
          <p className='font-semibold'>Digimidiya Management Consultants</p>
          <p>
            E-14 First Floor, South Extension Part 1,
            <br />
            New Delhi – 110049, India
          </p>
          <p>
            📞 <span className='font-medium'>+91 9990352710</span>
          </p>
          <p>
            📧{' '}
            <a
              href='mailto:business.enquiry@digimidiya.com'
              className='text-red-400 hover:underline'
            >
              business.enquiry@digimidiya.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
