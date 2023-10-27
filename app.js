import  express from "express";
import ConnectDB from "./db/connectDB.js";
import documentCreation from "./modals/Student.js"
const app = express();


const port = process.env.PORT || 3000;

// connecting to database without authentication
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017/schoolData"
ConnectDB(DATABASE_URL);

//database with authentication 
//  const DATABASE_URL=process.env.DATABASE_URL || "mongodb://surya:123456@localhost:27017/schoolData?authsource=schoolData"
// const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"
// ConnectDB(DATABASE_URL);

// create the document and saving

documentCreation()

app.get("/", (req, res) => {
  res.send("Hello Database")
})

app.listen(port, () => {
  console.log(`Server up at${port}`)
})