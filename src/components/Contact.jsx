import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Form, FormControl, Button } from 'react-bootstrap'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',
        event.target,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          setFormStatus({
            success: true,
            error: false
          })
          resetForm()
        },
        (error) => {
          setFormStatus({
            success: false,
            error: true
          })
        }
      )
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          size="sm"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '200px' }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          size="sm"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '200px' }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          size="sm"
          as="textarea"
          rows="3"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ width: '200px' }}
        />
      </Form.Group>
      {formStatus.success && (
        <p>Your message was sent successfully!</p>
      )}
      {formStatus.error && (
        <p>An error occurred while sending your message.</p>
      )}
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  )
}

export default ContactForm



