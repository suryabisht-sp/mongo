import express from "express";
import DbConnect from "./db/DbConnect.js";
const app = express();
import { join } from "path"
import web from "./routes/web.js"

const port = process.env.PORT || "3000"
const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

//static files

app.use(express.static("public"))

app.use("/student",express.static(join(process.cwd(),"public")))


// temp engine

app.set("view engine", "ejs")


//routes

app.get("/", web)

app.get("/student", web)

DbConnect(DB_URL)



app.listen(port, () => {
  console.log(`server is connect at Port: ${port}`)
})









// import  express from "express";
// import ConnectDB from "./db/connectDB.js";
// import {documentCreation, getAllData} from "./modals/Student.js"
// const app = express();


// const port = process.env.PORT || 3000;

// // connecting to database without authentication
// // const DATABASE_URL=process.env.DATABASE_URL || "mongodb+srv://suryabisht:Mayank@123143@cluster0.a3bytyl.mongodb.net/"
// const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017/schoolData"
// ConnectDB(DATABASE_URL);

// //database with authentication 
// //  const DATABASE_URL=process.env.DATABASE_URL || "mongodb://surya:123456@localhost:27017/schoolData?authsource=schoolData"
// // const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"
// // ConnectDB(DATABASE_URL);

// // create the document and saving
// //  documentCreation()
// // getAllData()

// app.get("/", async (req, res) => {
//   const reques = await getAllData();
//   res.send(reques)
// })

// app.listen(port, () => {
//   console.log(`Server up at${port}`)
// })