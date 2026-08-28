import React from 'react'

const ImageCard = ({ elem }) => {
  return (
    <div className="flex flex-col items-center">
     <a href={elem.url} target='_blank'>
      <div className=' h-50 w-50 rounded-2xl'>
        <img className='object-cover h-full w-full overflow-hidden' src={elem.download_url}></img>
      </div>
      <div>
        <h1 className='text-white font-bold '>{elem.author}</h1>
      </div>
      </a>
    </div>
  )
}

export default ImageCard