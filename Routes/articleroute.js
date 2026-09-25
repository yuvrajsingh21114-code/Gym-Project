const {pool}= require('../DB/db');
const express= require('express');
const app = express.Router();

app.get('/articles',async (req,res)=>{
    try{
        await pool.query("insert into articles(id,name) values(1,'new')");
        res.send("wait a minute");
    }catch(err){
        console.log(err);
    }
}
);

module.exports= app;