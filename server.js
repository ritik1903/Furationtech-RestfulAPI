const express = require('express');
const mongoose = require('mongoose');
const port = 8000;
const Item = require('./models/itemModel');
const app = express();

//JSON middleware
app.use(express.json())

//If we wanna use form instead of json we need to encode it.
app.use(express.urlencoded({extended : false}))


//*****Routes******//

//For Testing
app.get('/api', (req, res) => {
    res.send('Hello Node API!')
})

//For Testing
app.get('/blog', (req, res) => {
    res.send('Welcome to the App!')
})

//Retrieve all items from the database.
app.get('/api/items', async(req, res) => {
    try{
        const items = await Item.find({});
        res.status(200).json(items);
    }catch(err){
        res.status(500).json({message : error.message})
    }
})

//Retrieve a specific item by its ID.
app.get('/api/items/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
    }catch(err){
        res.status(500).json({message : error.message})
    }
})


//Create a new item in the database
app.post('/api/items', async(req, res) => {
    try{
        const item = await Item.create(req.body)
        res.status(200).json(item);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


//Update and existing item by its id
app.put('/api/items/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body);
        //We cannot find any product in database
        if(!item){
            return res.status(404).json({message : 'Cannot find any product with ID:',id})
        }
        const updatedItem = await Item.findById(id);
        res.status(200).json(updatedItem);
    }catch(err){
        res.status(500).json({message: error.message})
    }
})

//Delete an item by its ID.
app.delete('/api/items/:id',async(req, res) => {
    try{
        const {id} = req.params;
        const item = await Item.findByIdAndDelete(id);
        if(!item){
            return res.status(404).json({message : 'Cannot find any product with ID:',id})
        }
        res.status(200).json(item);
    }catch(err){
        res.status(500).json({message: error.message})
    }
})


//Database Connectivity
mongoose.connect('mongodb+srv://pawarsubham438:lzIXGQLrzV90Krpz@cluster6.3luznbl.mongodb.net/mernstackapi?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(8000, () => {
        console.log('NodeAPI app is running on the port::', port)
    });
}).catch(() => {
    console.log(error)
})

