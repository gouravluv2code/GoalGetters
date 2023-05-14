const express = require("express");
const http=require("http")
const app = express();
const connection = require("./db");
const { Server } = require("socket.io");

const { auth } = require("./middleware/auth.middleware");
const { govRouter } = require("./Routes/gourav.route");
const { FitRouter } = require("./Routes/fitness.route");
const cors = require("cors");
require("dotenv").config();

//Import userRouter
const { userRouter } = require("./Routes/user.router");

app.use(cors());
app.use(express.json());

const server=http.createServer(app)

   const io=new Server(server,{
     
      cors:{
         origin:"http://localhost:3000",
         method:["GET","POST"],
      }  
   })
   io.on('connection',(socket)=>{
    console.log(`User Connected with ID number : ${socket.id}`)
   console.log(socket.id)
     
   // socket.emit()
   socket.on("join_room",(data)=>{
      console.log(data)
     console.log("Joined user ",socket.id,"Room Number",data.room,data.name)

   })
    
   socket.on('send_Message',(data)=>{
      // socket.join(data.room)
      // socket.to(data.room).emit("received_message",data)
      socket.broadcast.emit("received_message",data)
   
   }) 

    socket.on('disconnet',()=>{
      console.log('User Disconnected with ID number :', socket.id)
    })
   })
app.use("/gData", govRouter);
app.use("/", FitRouter);

app.use("/users", userRouter);


server.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("mongo connected");
  } catch (err) {
    console.log("cannot connect to the db");
  }
  console.log("Port 8080 is running");
});
