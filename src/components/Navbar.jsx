import React, { Component } from 'react'
import "../styles/NavbarStyle.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className='wrapper'>
        <a href='/'><img className='logo' src="https://document-export.canva.com/9A2Fw/DAE7as9A2Fw/8/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220319T082939Z&X-Amz-Expires=14137&X-Amz-Signature=f8ccf3a793cd85056fde3587e6f146248b8e904a9d7c7d6d64161f590f75d5c7&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2019%20Mar%202022%2012%3A25%3A16%20GMT" alt="Logo" /></a>
        <div className='right'>
            <a className='menuitem links' href='/'>Home</a>
            <a className='menuitem links' href='https://github.com/itzsimplysurya'>About</a>
            <a className='menuitem links' href='https://github.com/itzsimplysurya/Stupido'>Project(real time example)</a>
        </div>
      </div> 
    </div>
  )
}

export default Navbar