const express= require('express');
const app= express();

app.use(express.json());
app.use('/api/uploads',express.static('uploads'));

app.listen(3000,()=>{
    console.log("Server running at port 3000");
});