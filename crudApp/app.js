const express=require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student=require("./models/student");
const dbConfig=require('./config/db.config');

app.use(bodyParser.json())
app.use(bodyParser.json())

const UserRoute = require('./routes/students')
app.use('/',UserRoute)

mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.get('/', (req, res) => {
    res.json({"message": "HI CRUD API RUNNING"});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
























// Student.insertMany({name: "snehal", email:"test@gmail", phoneNumber:8974395},
// {name: "snehal2", email:"test@gmail", phoneNumber:8974395})
// .then(data => {
//     console.log("it worked")
//     console.log(data);
// })


// const start= async () => {
//     try{
//         await connectDB();
//         app.listen(port, () => {
//            console.log(`${port} yes connected`);
//         });
//     } catch(error){
//         console.log(error);
//     }
// };
// start();