const {pool}= require('../DB/db');
const express= require('express');
const app = express.Router();

app.get('/articles',async (req,res)=>{
    try{
        const data= await pool.query("select * from articles");
        res.send(data.rows);
    }catch(err){
        console.log(err);
    }
}
);

app.get('/articles/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const data= await pool.query("select * from articles where id=$1",[id]);
        res.send(data.rows);
    }catch(err){
        console.log(err);
    }
}
);

module.exports= app;