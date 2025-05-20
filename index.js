const express = require('express')
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req,res)=>{
    res.end('Node Application is working!!!')
});
app.use('/api', routes);


app.listen(3000,()=>{
    console.log('serving on port')
})