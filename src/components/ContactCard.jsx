// import React, { useState } from 'react'
// import emailIcon from '../assets/mail.png'
// import { FaPaperPlane } from 'react-icons/fa'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     message: ''
//   })

//   const handleChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value })

//   const handleSubmit = async e => {
//     e.preventDefault()

//     try {
//       const response = await fetch('http://localhost:5000/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       })

//       const result = await response.json()

//       if (response.ok) {
//         toast.success(result.message || 'Email sent successfully!')
//         setFormData({ fullName: '', email: '', message: '' }) // Clear form
//       } else {
//         toast.error(result.message || 'Something went wrong.')
//       }
//     } catch (err) {
//       console.error('Error sending email:', err)
//       toast.error('Failed to send email. Try again later.')
//     }
//   }

//   return (
//     <div className='flex justify-center items-center min-h-screen bg-white px-4'>
//       <ToastContainer position='top-center' />
//       <div className='flex flex-col md:flex-row w-full max-w-4xl bg-gradient-to-b from-[#7f0029] to-[#e88080] p-8 rounded-2xl shadow-xl'>
//         <div className='flex-1 flex justify-center items-center mb-6 md:mb-0'>
//           <img
//             src={emailIcon}
//             alt='email'
//             className='rounded-3xl max-w-[250px] md:max-w-[300px]'
//           />
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className='flex-1 flex flex-col justify-center px-4 md:px-8 gap-4 text-white'
//         >
//           <h2 className='text-2xl font-semibold mb-2 text-center md:text-left'>
//             Send us your Enquiry
//           </h2>

//           <input
//             type='text'
//             name='fullName'
//             placeholder='Full Name Here'
//             className='p-3 rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400'
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type='email'
//             name='email'
//             placeholder='Email ID'
//             className='p-3 rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400'
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <textarea
//             name='message'
//             placeholder='Message Us'
//             className='p-3 h-28 rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400'
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <div className='flex justify-center mt-2'>
//             <button
//               type='submit'
//               className='bg-red-600 hover:bg-red-700 transition-all text-white font-bold py-3 px-8 rounded-full flex items-center gap-2'
//             >
//               Send <FaPaperPlane className='text-white' />
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ContactForm
import React, { useState } from 'react'
import emailIcon from '../assets/mail.png'
import { FaPaperPlane } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        setFormData({
          fullName: '',
          email: '',
          message: ''
        })
      } else {
        toast.error(result.message || 'Failed to send email')
      }
    } catch (err) {
      console.error('Error sending email:', err)
      toast.error('Something went wrong while sending email')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-white px-4'>
      <ToastContainer position='top-right' autoClose={3000} />
      <div className='flex flex-col md:flex-row w-full max-w-4xl bg-gradient-to-b from-[#7f0029] to-[#e88080] p-8 rounded-2xl shadow-xl'>
        <div className='flex-1 flex justify-center items-center mb-6 md:mb-0'>
          <img
            src={emailIcon}
            alt='email'
            className='rounded-3xl max-w-[250px] md:max-w-[300px]'
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex-1 flex flex-col justify-center px-4 md:px-8 gap-4 text-white'
        >
          <h2 className='text-2xl font-semibold mb-2 text-center md:text-left'>
            Send us your Enquiry
          </h2>

          <input
            type='text'
            name='fullName'
            placeholder='Full Name Here'
            className='p-3 rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400'
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Email ID'
            className='p-3 rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name='message'
            placeholder='Message Us'
            className='p-3 h-28 rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400'
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className='flex justify-center mt-2'>
            <button
              type='submit'
              className='bg-red-600 hover:bg-red-700 transition-all text-white font-bold py-3 px-8 rounded-full flex items-center gap-2'
            >
              Send <FaPaperPlane className='text-white' />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
