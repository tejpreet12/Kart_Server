import express from "express"

const app = express();

app.use(express.json())

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