import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SingleCard from '../Components/SingleCard/SingleCard'
import './Home.css' 


const Home = ({like, setLike}) => {

  const [characters, setCharacters] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://rickandmortyapi.com/api/character/')
                setCharacters(data.results)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
  
  
  return (
    <div className='divCards'>
      {characters.map(item => (
          <SingleCard item={item} like={like} setLike={setLike} key={item.id} />
      ))}
      </div>
  )
}

export default Home