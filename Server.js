const express= require('express');
const app= express();

const cors=require('cors');
app.use(cors());

app.use(express.json());
app.use('/api/uploads',express.static('uploads'));
app.use('/',express.static('Public'));

app.listen(3000,()=>{
    console.log("Server running at port 3000");
});

const articleroutes=require('./Routes/articleroute');
app.use('/api/',articleroutes);