const express = require('express');
const app = express();
app.use(express.json());
const mongoose  = require("mongoose");
mongoose.Promise = global.Promise;

const userRouter = require('./routes/userRoutes');

app.use(userRouter);


urldb = "mongodb+srv://Pramesh0423:Priya@9849187358@gbcwinter2021.88y4u.mongodb.net/GBCFULLSTACK?retryWrites=true&w=majority";

mongoose.connect(urldb, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log("mongodb connection", err)
    }else{
        console.log("Successfully connected to mongodb!!")
    }
})

const PORT = process.env.PORT || 3200
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}....`)
})