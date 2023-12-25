import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Blog from "./models/Blog.js";
import { PORT,mongoDBUrl } from "./config.js";


const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello guys');
})
app.get('/blogs', async (req,res)=>{
    try {
        const blogs = await Blog.find({});
        res.send(blogs);
    } 
    catch (error) {
        console.log('an error occured: ',error.message);
        res.send({message: error.message});
    }
})
app.get('/blogs/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id);
        res.send(blog);
    } 
    catch (error) {
        console.log('an error occured: ',error.message);
        res.send({message: error.message});
    }
});

app.post('/blogs', async (req,res)=>{
    try {
        
        if(req.body.author && req.body.title && req.body.content){
            const blog = {
                author: req.body.author,
                title: req.body.title,
                content: req.body.content
            }
            const result = await Blog.create(blog);
            if(result){
                return res.send('blog added successfully');
            }
            return res.send('some error occured');
        }
        else{
            return res.send('fill all fields: author, title and content');
        }
    } 
    catch (error) {
        console.log('an error occured: ',error.message);
        res.send({message: error.message});
    }
})
app.delete('/blogs/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await Blog.findByIdAndDelete(id);
        if(result){
            return res.send('deleted succesfully');
        }
        else {
            return res.send('no such post found');
        }
    } 
    catch (error) {
        console.log('an error occured: ',error.message);
        res.send({message: error.message});
    }
})
app.put('/blogs/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        if(req.body.author && req.body.title && req.body.content){
            const blog = {
                author: req.body.author,
                title: req.body.title,
                content: req.body.content
            }
            const result = await Blog.findByIdAndUpdate(id,blog);
            if(result){
                return res.send('updated succesfully');
            }
            else {
                return res.send('no such post found');
            }
        }
        else{
            res.send('enter all fields: author, title and content');
        }
    } 
    catch (error) {
        console.log('an error occured: ',error.message);
        res.send({message: error.message});
    }
})

mongoose
    .connect(mongoDBUrl)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log('server connected to database');
            console.log(`server is listening on port ${PORT}`);
        })
    })
    .catch((err)=>{
        console.log('An error occured: ',err);
    })