import '../index.css'
import React from 'react'

function Info () {
  return (
    <main className='info-container'>
      <img src="/Rectangle.png" alt="imagen de perfil" />
      <div className='profile-info'>
        <h1 className='name'>Laura Smith</h1>
        <h2 className='ocupation'>Frontend Developer</h2>
        <p className='website'>laurasmith.website</p>
      </div>
      <div className='button-container'>
        <button className='email-button'><img src="/Mail.png" alt="" />Email</button>
        <button className='linkedin-button'><img src="/linkedin.png" alt="" />LinkedIn</button>
      </div>
    </main>
  )
}

export default Info
