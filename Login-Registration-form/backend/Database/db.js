const mongoose = require('mongoose');

const connectDB = () => {
    try
    {
        mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
        console.log("Database connected");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = connectDB;