import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="inner-box">
        <div className="image-container">
            <img src="" alt="" />
        </div>
        <div className="input-prompt">
            <input type="text" name='prompt' placeholder='write a prompt for generator a image as you want..' />
            <input type="submit" value='send' />
        </div>
      </div>
    </div>
  )
}

export default Home;