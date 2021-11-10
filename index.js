const express =require('express');
const app=express();
const PORT=process.env.PORT || 3000;
app.get('/',function process(req,res){
    res.json('hey this is working ,Running on the port : ' +PORT);
})
app.listen(PORT,()=>{
    console.log('listening on port ' +PORT);
});