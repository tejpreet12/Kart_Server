import express from "express"
import userRoutes from "./routes/user.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

//Routes
app.use('/user',userRoutes)

const start = async () => {

    try {
        app.listen({port:3000, host:"0.0.0.0"}, (err,addr) => {
            if(err){
                console.log(err);
            }else{
                console.log("Server started on http://localhost:3000")
            }
        })
    }catch(err) {
        console.log("Error while starting server ",err)
    }


}

start();