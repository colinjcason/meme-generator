import React, { useState } from 'react'
import memesData from '../memesData.js'

const Meme = () => {
  // const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg')
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const handleClick = () => {
    const memesArray = allMemeImages.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
      <div className='form'>
        <input 
          type='text' 
          className='form-input'
          placeholder='shut up'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
         />
        <input 
          type='text' 
          className='form-input'
          placeholder='and take my money'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
         />
        <button 
          className='form-button'
          onClick={handleClick}
        >
          Get a new meme image
        </button>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt='meme' />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
  )
}

export default Meme