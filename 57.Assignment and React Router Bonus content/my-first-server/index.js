const express = require('express');
const app = express();
const port = 5120;

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/data', (req, res) =>{
    res.send('Data Here')
})

app.listen(port, ()=>{
    console.log(`Port here ${port}`)
})