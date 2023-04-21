import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const RecordCard = (props) => {
  const hsptlmmt = props.hsptlmmt



  return (
    <div className='card-container'>
      <img
        src='https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427__340.jpg'
        alt='Records'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-record/${hsptlmmt._id}` }>
            {hsptlmmt.name}  
          </Link> 
        </h2>
        <h3>{hsptlmmt.age}</h3>
        <p>{hsptlmmt.diseases}</p>
      </div>
    </div>  
  )
}

export default RecordCard;