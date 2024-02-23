const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/studentData')
.then(()=>console.log('database connected'))
.catch((e)=>console.log('not connected',e))

const academicSchema =new mongoose.Schema({
    studentID: String,
    name: String,
    grades:String,
    subjects: Number,
    emailID:String,
})

const ccActivitiesSchema =new mongoose.Schema({
    studentID: String,
    name: String,
    activityType:String,
    TotalWins:Number,
})

const academicRecords=new mongoose.model('Academic Records: ', academicSchema);
const ccActivitiesRecords=new mongoose.model('Activities Records: ', ccActivitiesSchema);

//create document

const Reactdata=new courseRecord({
    title:'AGGGTAM',
    author:'Holly Jackson',
    genre:'Mystery',
    pages:365,
    have_read:true,
})

Reactdata.save();

