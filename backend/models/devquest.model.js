import mongoose, { Mongoose } from "mongoose";

const devquestSchema  = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    question : {
        type : String,
        required : true
    },
    options : {
        type : Array,
        required : true
    },
    correctAnswer : {
        type : Number,
        required : true
    },
    explanation : {
        type : String
    }
})

const devquestModel = mongoose.model("devquest" , devquestSchema);
export default devquestModel;