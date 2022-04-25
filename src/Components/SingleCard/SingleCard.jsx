import React from 'react'
import './SingleCards.css'

const SingleCard = ({ item, like, setLike }) => {


    return (
        <div className="divCards">
            <div className="themaincontainer">
                <div className="thecard">
                    <div className="theFront">
                        <img alt={item.name} src={item.image} />

                    </div>
                    <div className="theBack">
                        <div className="text">
                            <h4>{item.name}</h4>
                            <p>{item.status}</p>
                            <p>{item.species}</p>
                            <p>{item.gender}</p>
                        </div>

                    </div>
                </div>
                {like.includes(item) ? (
                    <button className='btn' onClick={() => {
                        setLike(like.filter((l) => l.id !== item.id))
                    }} >
                        Dislike
                    </button>
                ) : <button className='btn' onClick={() => {
                    setLike([...like, item])
                }} >
                    Like
                </button>}
            </div>
        </div>
    )
}

export default SingleCard