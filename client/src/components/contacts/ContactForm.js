import React, { useState } from 'react'

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        name="name"
        placeholder='Name'
        onChange={onChange}
        value={name} />
      <input
        type="email"
        name="email"
        placeholder='Email'
        onChange={onChange}
        value={email} />
      <input
        type="text"
        name="phone"
        placeholder='Phone'
        onChange={onChange}
        value={phone} />
      <h5>Contact Type</h5>
      <input type="radio" name="type" value='personal' checked={type === 'personal'} />
      Personal{' '}
      <input type="radio" name="type" value='professional' checked={type === 'professional'} />
      Professional{' '}
      <div>
        <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
      </div>
    </form>
  )
}

export default ContactForm
