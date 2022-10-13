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

  return (
      <div className='form'>
        <input 
          type='text' 
          className='form-input'
          placeholder='shut up'
         />
        <input 
          type='text' 
          className='form-input'
          placeholder='and take my money'
         />
        <button 
          className='form-button'
          onClick={handleClick}
        >
          Get a new meme image
        </button>
        <img src={meme.randomImage} alt='meme' className='form-image' />
      </div>
  )
}

export default Meme