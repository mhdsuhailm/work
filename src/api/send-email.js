import nodemailer from 'nodemailer'

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

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

    return res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Failed to send email.' })
  }
}
