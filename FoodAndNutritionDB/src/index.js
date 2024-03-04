const express= require('express');
const app=express();
const cors= require('cors');
const port=3200;
app.use(cors())
const foodData= require('./models/dbSchema');
require('./db/connection');
app.use(express.json());

//welcome page

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to Page</h1>');
})

//get all food data

app.get('/getFoodData', async(req,res)=>{
    try{
        const getData= await foodData.find({});
        res.status(201).json(getData);
    }
    catch(e){
        console.error(e);
    }
})

//find specific food detail by its name

app.get('/getFoodData/:item_name', async(req,res)=>{
    const item_Name=req.params.item_name;
    try{
        const oneFoodData=await foodData.findOne({item_Name: item_Name});  //data of only one parameter
       if(!oneFoodData){
        return res.status(400).json({error: 'Food Not Found'})
       }
       res.status(200).json(oneFoodData)
    }
    catch(error){
        console.error(error);
    }
})

//post data to the database

app.post('/foodData', async(req, res)=>{
    try{
        const addingData= new foodData(req.body);
        console.log(addingData);
        const saveData= await addingData.save();
        console.log(saveData);
        res.status(201).json(saveData);
    }
    catch(e){
        console.error(e);
    }
})

app.listen(port, ()=>{
    console.log(`Port Number ${port}`);
})