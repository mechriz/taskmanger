//this will handle connection ligic to the MongoDB database

 const mongoose= require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager',{ userNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB succesfully:)");
}).catch((e)=>{
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

//To prevent deprectation warnings(from MongoDB native driver)
mongoose.set('useCreateIndex',true);
mongoose.set('esefindAndModify',false);


module.exports = {
    mongoose
};
