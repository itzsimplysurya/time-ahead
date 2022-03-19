import React from 'react'
import "../styles/FooterStyle.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='links-footer'>
            <div className='linkwrapper'>
                <div className='linkitems'>
                    <a href='/'>Home</a>
                    <a href='https://github.com/itzsimplysurya'>About</a>
                    <a href='/'>Projects</a>
                </div>
                <div className='linkitems'>
                    <a href='https://openai.com/'>OpenAI</a>
                    <a href='https://github.com/'>Github</a>
                    <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Don't click</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer