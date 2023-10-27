import mongoose from "mongoose"

const documentCreation =async () => {
  
   try {
    
     
const studentSchema = new mongoose.Schema({
  name: { type: String, required:true },
  age: { type: Number, min: 18, max: 60 },
  fees: { type: mongoose.Decimal128, required: true, validate: (v) => { v > 5500.50 } },
  hoobies: { type: Array },
  Comment: [{ value: { type: String, publish: { type: Date, default: Date.now() } } }]  
})

// student is the colletion name
const studentModal= mongoose.model("students", studentSchema)


// creating new document

const studentDocument = new studentModal({
  name: "Rahul",
  age: 25,
  fees: 55000,
  hobbies:["reading", "dancing"],
  Comment:[{value:"trying"}],
})


//saving the documnet

const result=await studentDocument.save()
console.log("result", result)
   } catch (error) {
    console.log("error", error)
   }

}


export default documentCreation;