const express = require('express');
const mongoose = require('mongoose');
const port = 8000;
const Item = require('./models/itemModel');
const app = express();

//JSON middleware
app.use(express.json())

//Routes
app.get('/api', (req, res) => {
    res.send('Hello Node API')
})

app.get('/item', (req, res) => {
    res.send('Choose an item')
})

app.get('/items', async(req, res) => {
    try{
        const items = await Item.find({});
        res.status(200).json(items);
    }catch(err){
        res.status(500).json({message : error.message})
    }
})

app.get('/items/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
    }catch(err){
        res.status(500).json({message : error.message})
    }
})

app.post('/items', async(req, res) => {
    try{
        const item = await Item.create(req.body)
        res.status(200).json(item);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


//Update and existing item by its id


mongoose.connect('mongodb+srv://pawarsubham438:lzIXGQLrzV90Krpz@cluster6.3luznbl.mongodb.net/mernstackapi?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(8000, () => {
        console.log('NodeAPI app is running on the port::', port)
    });
}).catch(() => {
    console.log(error)
})

