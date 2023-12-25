import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',margin:'0 0 30px 0'}}>
      <h1>BLOGG</h1>
      <Link to={'/blogs/create'}>
        <button style={{height:'30px'}}>Write a blog</button>
      </Link>
      
    </div>
  )
}

export default Header
