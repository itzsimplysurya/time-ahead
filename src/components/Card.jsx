import React from 'react'
import "../styles/CardStyle.css"

function Card() {
  return (
    <>
    <div className='text'>
        <h2>Top technologies,tools and service which will grow in future</h2>
   </div>
   <div className='card'>
       <a href='https://openai.com/'><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qPao_uBbHlzHIzOL7ejI8wHaEK%26pid%3DApi&f=1" /></a>  
          <div className='infocard'>
              <h2>OpenAI</h2>
              <h4>Open AI is an AI research and deployment company, Soon in the future we will find many AI libraries here</h4>
          </div>
      </div><div className='card'>
              <a href='https://github.com/'><img src="data:image/png;base64,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" /></a>
              <div className='infocard'>
                  <h2>Github</h2>
                  <h4>Github is a place where you can host your open source code, Here you can make your own community</h4>
              </div>
          </div>
          <div className='card'>
        <a className='https://web3.foundation/'><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GqrhIpVfVAezSpun4Dd4NAHaD5%26pid%3DApi&f=1" /></a>
        <div className='infocard'>
            <h2>WEB 3.0</h2>
            <h4>Web 3.0 everywhere people are talking about this cause why not it is the real future of the internet and we are all gonna be using it one day</h4>
        </div>
    </div>
    <div className='card'>
        <a href="https://www.tensorflow.org/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.W22RprvUTe3x_DWaRk38SAHaEN%26pid%3DApi&f=1" /></a>
        <div className='infocard'>
            <h2>Tenserflow</h2>
            <h4>TensorFlow is an end-to-end open source platform for machine learning.</h4>
        </div>
    </div>
          </>
  )
}

export default Card