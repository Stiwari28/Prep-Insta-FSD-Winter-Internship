const express=require('express');
const path = require('path');
const app=express();
const port= 4000;
const courseModel=require('./models/CourseSchema');
const taskModel=require('./models/TaskSchema');
require('./database/connection');
app.use(express.json());


app.use(express.static(path.join(__dirname, '')));

//main Page
app.get('/', (req,res)=>{
    try{
        res.sendFile(path.join(__dirname, '', 'index.html'));
        res.status(201).json(getData);
    }
    catch(e){
        console.error(e);
    }

})

//getCourseDetails

app.get('/getCourseDetails', async(req,res)=>{
    try{
        const getData= await courseModel.find({});
        res.status(201).json(getData);
    }
    catch(e){
        console.error(e);
    }
})

app.get('/getTaskDetails', async(req,res)=>{
    try{
        const getData= await taskModel.find({});
        res.status(201).json(getData);
    }
    catch(e){
        console.error(e);
    }
})

//post data to the database

app.post('/courseDetails', async(req, res)=>{
    try{
        const addingData= new courseModel(req.body);
        console.log("Wohooo!! A new course is being added to the database" );
        console.log(addingData.courseName + " is added to the database.");
        const saveData= await addingData.save();
        console.log(saveData);
        res.status(201).json(saveData);
    }
    catch(e){
        console.error(e);
    }
})

app.post('/taskDetails', async(req, res)=>{
    try{
        const addingData= new taskModel(req.body);
        console.log(`Wohooo!! A new task is being added to the db` );
        console.log(addingData.taskName + " is added to the database.");
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