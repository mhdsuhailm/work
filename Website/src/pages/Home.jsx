import { Link } from 'react-router-dom'
import heroImg from '../assets/herolight.jpg'

const Home = () => {
  return (
    <div id='home'>
      <section
        className='relative h-screen w-full bg-cover bg-center'
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Light overlay for readability */}
        <div className='absolute inset-0 bg-white/60 flex items-center justify-center px-6'>
          <div className='text-center text-gray-900 max-w-3xl'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              Empowering Business Success Through Innovation
            </h1>
            <p className='text-lg md:text-xl mb-6 text-gray-800'>
              Discover tailored solutions and expert guidance to elevate your
              business. Our innovative approach and industry expertise drive
              measurable results, helping you achieve your goals with
              confidence.
            </p>
            <div className='space-x-4'>
              <Link
                to='/services'
                className='bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition'
              >
                Our Services
              </Link>
              <Link
                to='/contact'
                className='border border-red-600 text-red-600 font-semibold py-2 px-6 rounded-full hover:bg-red-600 hover:text-white transition'
              >
                Contact Us
              </Link>
            </div>

            {/* Scroll Down Arrow */}
            <a href='#about' className='animate-bounce mt-10 inline-block'>
              <svg
                className='w-8 h-8 text-red-600'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll anchor target */}
      <div id='about' className='h-24'></div>
    </div>
  )
}

export default Home
