const express=require("express");
const dotenv=require("dotenv");
const path=require("path");
const cors=require("cors");
const connectDB=require('./config/db');

dotenv.config({ path:'./config/config.env'});
const app=express();
connectDB();// connect to db
const PORT=process.env.PORT || 5000 ;
//body parser
app.use(express.json());
//enable cors
app.use(cors());
// set static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/v1/stores',require('./routes/stores'));

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
});