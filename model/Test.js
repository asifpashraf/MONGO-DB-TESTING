const mongoose =require('mongoose');



const TestSchema = mongoose.Schema({
    title:{type:String,
        required:true,},

    description:{type:String,
        required:true,},

    Date:{type:String,
            default:Date.now
        }
});

module.exports = mongoose.model("Test",TestSchema);