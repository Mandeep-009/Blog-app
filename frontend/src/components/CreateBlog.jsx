import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const CreateBlog = () => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [content,setContent] = useState('');
    const clickHandler = async()=>{
        if(title===''||author===''||content===''){
            return window.alert('Enter all fields: title, author and content');
        }
        const blog = {author,title,content};
        const response = await axios.post('http://localhost:3000/blogs',blog);
        if(response) {
            window.alert('blog added successfully');
            const originalURL = window.location.href;
            const splitURL = originalURL.split('/');
            splitURL.pop();
            splitURL.pop();
            const modifiedURL = splitURL.join('/');
            window.location.href = modifiedURL;
        }
        else {
            window.alert('some error occured while posting the blog');
        }
    }
  return (
    <div>
      <div style={{margin:'10px'}}>Enter Title of your blog</div>
      <input type='text' id='title' onChange={(e)=>setTitle(e.target.value)}/>
      <div style={{margin:'10px'}}>Enter your name</div>
      <input type="text" id='author' onChange={(e)=>setAuthor(e.target.value)}/>
      <div style={{margin:'10px'}}>Here is your space, take your time:</div>
      <textarea type="" style={{color:'white',backgroundColor:'#131417',height:'60vh',width:'70vw'}} id='content' onChange={(e)=>setContent(e.target.value)}/>
      <div><button style={{margin:'20px',height:'25px',width:'100px'}} onClick={clickHandler}>Submit</button></div>
    </div>
  )
}

export default CreateBlog
