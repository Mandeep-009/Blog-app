import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from './Loader';

const Blog = () => {
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});
    useEffect(()=>{
      const getData = async()=>{
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/blogs/${id}`);
        setData(response.data);
        setLoading(false);
    }
    getData();
    },[])
  return (
    <div>
      {loading?
        (<Loader/>) :
        (
          <div>
            <h2>{`${data.title}`}</h2>
            <h4>{`~ by ${data.author}`}</h4>
            <div style={{width:'70vw',position:'absolute',display:'flexbox',left:'15vw'}}>{data.content}</div>
          </div>
        )  
    }
    </div>
  )
}

export default Blog
