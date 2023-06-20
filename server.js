const express = require('express');
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.listen(8000, () => {
    console.log(('node Api app is running on the port 8000'))
})