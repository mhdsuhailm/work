
// import { useState } from 'react'
// import logo from '../assets/react.svg'

// const Header = ({ activeSection, setActiveSection }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isMoreOpen, setIsMoreOpen] = useState(false)

//   const mainLinks = [
//     { name: 'About Us', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Industry', id: 'industry' },
//     { name: 'Contact', id: 'contact' }
//   ]

//   const moreLinks = [
//     { name: 'Methodology', id: 'methodology' },
//     { name: 'Case Study', id: 'case-study' },
//     { name: 'Engagement Models', id: 'engagement-models' }
//   ]

//   const handleClick = id => {
//     setActiveSection(id)
//     setIsOpen(false)
//     setIsMoreOpen(false)
//   }

//   return (
//     <header className='fixed top-0 w-full z-50 bg-white shadow-md'>
//       <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
//         {/* Logo */}
//         <a
//           href='#home'
//           onClick={() => handleClick('home')}
//           className='flex items-center space-x-2 cursor-pointer'
//         >
//           <img src={logo} alt='Logo' className='w-10 h-10' />
//         </a>

//         {/* Desktop Navigation */}
//         <nav className='hidden md:flex items-center space-x-6'>
//           {mainLinks.map(item => (
//             <a
//               key={item.id}
//               href={`#${item.id}`}
//               onClick={() => handleClick(item.id)}
//               className={`cursor-pointer text-black hover:text-red-600 hover:underline font-medium ${
//                 activeSection === item.id ? 'text-red-600 underline' : ''
//               }`}
//             >
//               {item.name}
//             </a>
//           ))}

//           {/* More Dropdown */}
//           <div
//             className='relative'
//             onMouseEnter={() => setIsMoreOpen(true)}
//             onMouseLeave={() => setIsMoreOpen(false)}
//           >
//             <span className='text-black cursor-pointer hover:text-red-600 hover:underline font-medium'>
//               More ▾
//             </span>
//             {isMoreOpen && (
//               <div className='absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 w-52 z-10'>
//                 {moreLinks.map(item => (
//                   <a
//                     key={item.id}
//                     href={`#${item.id}`}
//                     onClick={() => handleClick(item.id)}
//                     className={`block px-4 py-2 cursor-pointer hover:text-red-600 hover:underline ${
//                       activeSection === item.id ? 'text-red-600 underline' : ''
//                     }`}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Mobile Hamburger */}
//         <button
//           className='md:hidden text-black'
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className='w-6 h-6'
//             fill='none'
//             stroke='currentColor'
//             strokeWidth='2'
//             viewBox='0 0 24 24'
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M6 18L18 6M6 6l12 12'
//               />
//             ) : (
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M4 6h16M4 12h16M4 18h16'
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className='md:hidden bg-white px-4 pb-4 space-y-2'>
//           {[...mainLinks, ...moreLinks].map(item => (
//             <a
//               key={item.id}
//               href={`#${item.id}`}
//               onClick={() => handleClick(item.id)}
//               className={`block py-2 cursor-pointer text-black hover:text-red-600 hover:underline font-medium ${
//                 activeSection === item.id ? 'text-red-600 underline' : ''
//               }`}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header
import { useState, useRef } from 'react'
import logo from '../assets/react.svg'

const Header = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const timeoutRef = useRef(null)

  const mainLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Industry', id: 'industry' },
    { name: 'Contact', id: 'contact' }
  ]

  const moreLinks = [
    { name: 'Methodology', id: 'methodology' },
    { name: 'Case Study', id: 'case-study' },
    { name: 'Engagement Models', id: 'engagement-models' }
  ]

  const handleClick = id => {
    setActiveSection(id)
    setIsOpen(false)
    setIsMoreOpen(false)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsMoreOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMoreOpen(false)
    }, 300)
  }

  return (
    <header className='fixed top-0 w-full z-50 bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        {/* Logo */}
        <a
          href='#home'
          onClick={() => handleClick('home')}
          className='flex items-center space-x-2 cursor-pointer'
        >
          <img src={logo} alt='Logo' className='w-10 h-10' />
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          {mainLinks.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`cursor-pointer relative group font-medium text-black ${
                activeSection === item.id ? 'text-red-600' : ''
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-red-600 transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100 ${
                  activeSection === item.id ? 'scale-x-100' : ''
                }`}
                style={{ width: '100%' }}
              ></span>
            </a>
          ))}

          {/* More Dropdown */}
          <div
            className='relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className='cursor-pointer relative group font-medium text-black hover:text-red-600'>
              More ▾
              <span
                className='absolute left-0 -bottom-0.5 h-0.5 bg-red-600 transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100'
                style={{ width: '100%' }}
              ></span>
            </span>

            {isMoreOpen && (
              <div className='absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 w-52 z-10'>
                {moreLinks.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleClick(item.id)}
                    className={`block px-4 py-2 cursor-pointer relative group font-medium text-black hover:text-red-600 ${
                      activeSection === item.id ? 'text-red-600' : ''
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-4 bottom-1 h-0.5 bg-red-600 transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100 ${
                        activeSection === item.id ? 'scale-x-100' : ''
                      }`}
                      style={{ width: 'calc(100% - 2rem)' }}
                    ></span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden text-black'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white px-4 pb-4 space-y-2'>
          {[...mainLinks, ...moreLinks].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`block py-2 cursor-pointer relative group font-medium text-black hover:text-red-600 ${
                activeSection === item.id ? 'text-red-600' : ''
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100 ${
                  activeSection === item.id ? 'scale-x-100' : ''
                }`}
                style={{ width: '100%' }}
              ></span>
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
