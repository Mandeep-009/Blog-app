import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            const blogs = await axios.get('http://localhost:3000/blogs');
            setData(blogs.data);
        }
        getData();
    },[data]);
  return (
    <div>
      <Header/>
      {data.map((blog,index)=>{
        return (
          <Link to={`/blogs/${blog._id}`}>
            <div className='blog-item' key={index}>{blog.title}</div>
          </Link>
        );
      })}
    </div>
  )
}

export default Home
