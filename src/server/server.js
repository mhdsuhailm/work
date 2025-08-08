import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/send-email', async (req, res) => {
  const { fullName, email, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })

    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: 'business.enquiry@digimidiya.com',
      subject: 'New Enquiry',
      html: `
        <h3>New Contact Form Enquiry</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    })

    res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to send email.' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
