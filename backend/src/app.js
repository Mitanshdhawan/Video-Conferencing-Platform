import express from 'express';
import {createServer} from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectToSocket } from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';
const app = express();
const server=createServer(app);
const io=connectToSocket(server);
app.set("port",process.env.PORT || 8000);
app.use(cors());
app.use(express.json({limit:"40Kb"}));
app.use(express.urlencoded({extended:true,limit:"40Kb"}));
app.use("/api/v1/users",userRoutes);
const start=async()=>{
    app.set("mongo_user")
    const connectionDb=await mongoose.connect("mongodb+srv://dhawanmitansh3106:zVlI5sGbla4t4I3G@cluster1.xln7wes.mongodb.net/")
    console.log(`Mongoose connected to Host:${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>
{
    console.log("server is running on port 8000");
});
}
start(); 