import mongoose from "mongoose"

const DbConnect = async(DB_URL) => {

  try {
    const DB_OPTIONS = {
      dbName:"SchoolDB"
    }
    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log(`Database ${DB_OPTIONS.dbName} connected`)
  } catch (error) {
   console.log("error", error)   
  }
}


export default DbConnect;
































// const ConnectDB =async (DATABASE_URL ) => {
 
//   // const DB_OPTIONS = {
//   //   user: "surya",
//   //   pass: "123456",
//   //   dbName: "schoolData",
//   //   authSouce:"schoolData"
//   // }

//   // try {
//   //   await mongoose.connect(DATABASE_URL, DB_OPTIONS)
//   //     console.log("database connected")
//   //      } catch (error) {
//   // console.log("error", error)
//   // }

  
//   // without authentication
//   try {
//     await mongoose.connect(`${DATABASE_URL}`)
//       console.log("database connected")
//        } catch (error) {
//   console.log("error", error)
//   }  
// }

// export default ConnectDB;