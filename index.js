const express=require("express");
const app=express();
const userRouter=require('./routes/routes');
app.use(express.json())
app.set("view engine","ejs");
app.use('/',userRouter);
app.listen(3001)