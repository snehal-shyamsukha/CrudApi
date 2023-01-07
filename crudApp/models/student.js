const mongoose=require("mongoose");
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phoneNumber:{
        type: Number,
        default:''
    },
    Age:{
        type: Number,
        default:''
    },
    isStudent:{
        type: Boolean,
        default: true
    },
    highestQualification:{
        type: String,
    },
    interest:{
        type: [String],
    },
    address:{
        type: String,
    },
    branch:{
        type: String,
    }
});

module.exports= mongoose.model('Student',studentSchema);