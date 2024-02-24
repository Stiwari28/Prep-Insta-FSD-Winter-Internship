const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/studentData')
.then(()=>console.log('database connected'))
.catch((e)=>console.log('not connected',e))

const academicSchema =new mongoose.Schema({
    studentID: Number,
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
// Academic Records Collection

const student_academic=async()=>{
    try{
        const allData=await academicRecords.create([
            {
                studentID: 1,
                name: 'John Doe',
                grades: 'A',
                subjects: 4,
                emailID: 'johndoe1@example.com',
            },
            {
                studentID: 2,
                name: 'Jane Smith',
                grades: 'B',
                subjects: 5,
                emailID: 'janesmith2@example.com',
            },
            {
                studentID: 3,
                name: 'Michael Johnson',
                grades: 'A+',
                subjects: 6,
                emailID: 'michaeljohnson3@example.com',
            },
            {
                studentID: 4,
                name: 'Emily Brown',
                grades: 'B+',
                subjects: 4,
                emailID: 'emilybrown4@example.com',
            },
            {
                studentID: 5,
                name: 'David Lee',
                grades: 'A-',
                subjects: 7,
                emailID: 'davidlee5@example.com',
            },
            {
                studentID: 6,
                name: 'Sarah Williams',
                grades: 'C',
                subjects: 5,
                emailID: 'sarahwilliams6@example.com',
            },
            {
                studentID: 7,
                name: 'Daniel Garcia',
                grades: 'A',
                subjects: 6,
                emailID: 'danielgarcia7@example.com',
            },
            {
                studentID: 8,
                name: 'Sophia Martinez',
                grades: 'B-',
                subjects: 4,
                emailID: 'sophiamartinez8@example.com',
            },
            {
                studentID: 9,
                name: 'Alexander Smith',
                grades: 'A+',
                subjects: 8,
                emailID: 'alexandersmith9@example.com',
            },
            {
                studentID: 10,
                name: 'Olivia Johnson',
                grades: 'C+',
                subjects: 5,
                emailID: 'oliviajohnson10@example.com',
            }
        ])
    }
    catch(e){
        console.log('error');
    }
}

student_academic();

// Co-curricular Activities Records Collection

const student_activities=async()=>{
    try{
        const allData=await ccActivitiesRecords.create([
            {
                studentID: 'StudentID-1',
                name: 'John Doe',
                activityType: 'Sports',
                TotalWins: 3,
            },
            {
                studentID: 'StudentID-2',
            name: 'Jane Smith',
            activityType: 'Music',
            TotalWins: 5,
            },
            {
                studentID: 'StudentID-3',
                name: 'Michael Johnson',
                activityType: 'Debate',
                TotalWins: 2,
            },
            {
                studentID: 'StudentID-4',
                name: 'Emily Brown',
                activityType: 'Drama',
                TotalWins: 4,
            },
            {
                studentID: 'StudentID-5',
            name: 'David Lee',
            activityType: 'Chess',
            TotalWins: 1,
            },
            {
                studentID: 'StudentID-6',
                name: 'Sarah Williams',
                activityType: 'Basketball',
                TotalWins: 6,
            },
            {
                studentID: 'StudentID-7',
            name: 'Daniel Garcia',
            activityType: 'Soccer',
            TotalWins: 7,
            },
            {
                studentID: 'StudentID-8',
            name: 'Sophia Martinez',
            activityType: 'Art',
            TotalWins: 2,
            },
            {
                studentID: 'StudentID-9',
            name: 'Alexander Smith',
            activityType: 'Swimming',
            TotalWins: 3,
            },
            {
                studentID: 'StudentID-10',
            name: 'Olivia Johnson',
            activityType: 'Robotics',
            TotalWins: 8,
            }
        ])
    }
    catch(e){
        console.log('error');
    }
}

student_activities();

//read
const getDocument = async () => {
    try {
        const result = await academicRecords.find({ grades: 'A' }, { name: 1, emailID: 1, _id:0 });
        console.log(result);
    } catch (e) {
        console.log('Error:', e);
    }
}

getDocument();


//update

const updateDocument = async (studentId, newData) => {
    try {
        const updatedData = await academicRecords.findOneAndUpdate(
            { studentID: studentId },
            { $set: newData },
            { new: true }
        );
        console.log('Document updated successfully:', updatedData);
    } catch (error) {
        console.error('Error updating document:', error);
    }
}
updateDocument(1, { grades: 'A+' });

//delete

const deleteDocument = async (studentId) => {
    try {
        const deletedData = await academicRecords.findOneAndDelete({ studentID: studentId });
        console.log('Document deleted successfully:', deletedData);
    } catch (error) {
        console.error('Error deleting document:', error);
    }
}

// Usage:
deleteDocument(9);






