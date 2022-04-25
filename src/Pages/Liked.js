import React from 'react'
import SingleCard from '../Components/SingleCard/SingleCard'
import '../Pages/Home.css'

const Liked = ({like, setLike}) => {
  return (
      <div className='divCards'>
        {like.map((item) => (
          <SingleCard item={item} key={item.id} like={like} setLike={setLike} />
        ))}
      </div>

  )
}

export default Liked