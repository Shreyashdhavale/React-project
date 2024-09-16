const express = require('express');
const port=8000;
const cors = require('cors')
const app = express();

const connectDB = require('./Database/db')
connectDB();
const User = require('./Database/user')

app.use(express.json())
app.use(cors())

app.post('/register', async(req,res)=>{
    try{
        const {username,password} = req.body;
        // console.log(req.body);
        const existingUser = await User.findOne({username})
        if(existingUser){
            return res.status(400).json({message:'User already exists Please Login'})
        }
        const user = new User({username,password})
        await user.save();
        res.status(201).json({message:'Registration Completed'})
    }
    catch{
        res.status(500).json({message:'Registration Failed'})
    }
})

app.post('/login', async(req,res) =>{
    try{
        const {username,password} = req.body;
    const user = await User.findOne({username});

    if(!user)
    {
        return res.status(400).json({message:'User Does not exist'})
    }
    if(user.password !== password)
    {
        return res.status(400).json({message:'Invalid username or password'})
    }
    res.status(200).json({message:'Login Successfull'})
    }
    catch{
        return res.status(500).json({message:'Login Failed'})
    }
})

app.listen(port, ()=>{ 
    console.log("Listening the Port :",port);
})