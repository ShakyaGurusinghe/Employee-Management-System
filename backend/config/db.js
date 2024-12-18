const mongoose  =require('mongoose');

const dburl = "mongodb+srv://Shakya:1234@cluster0.y4ca2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery",true,"useNewUrlParser",true);

const connection = async() => {
try{
    mongoose.connect(dburl);
    console.log("MongoDB Connected!");
}catch{ 
    console.error("e.message");
    process.exit();
}
};

module.exports = connection;