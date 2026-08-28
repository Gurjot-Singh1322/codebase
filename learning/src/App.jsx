import React from 'react'
import axios from 'axios'
import {useState} from  "react"
import {useEffect} from  "react"
import ImageCard from './Components/ImageCard'
import Pagination from './Components/Pagination'
const App = () => {
  
  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)
  
  
  useEffect(()=>{
    fetchData()
  },[index])

  const pageIncrement = () => {
    setIndex(prev=>prev + 1)
  }
  
  const pageDecrement = () => {
    if(index > 1){
      setIndex(prev=>prev - 1)
    }
  }

  const fetchData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
      setData(response.data) 
    }
 

  const printUSerData = data.map(function(elem,idx){
    return  <ImageCard key={elem.id} elem={elem} />

  })

  
  return (
    <div className='bg-gray-950 h-full w-full'>
        <div className=' flex flex-col justify-between items-center h-full'>
          <h1 className=' mb-10 pt-5 text-2xl font-bold text-white'>
          Image Gallery
         </h1>
        <div className='flex flex-wrap gap-5 p-2 justify-center'>{printUSerData}
        </div >
         <Pagination
        index={index}
        pageDecrement={pageDecrement}
        pageIncrement={pageIncrement}
      />
        </div> 
    </div>
  )
}

export default App