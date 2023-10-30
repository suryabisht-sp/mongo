class StudentController {
  static getAllDoc = (req, res) => {
       res.render("index.ejs")
  }

  static createDoc = (req,res) => {
    res.redirect("/student")
  }


  static editDoc = (req,res) => {
    res.render("edit")
  }


  static updateById = (req,res) => {
    res.redirect("/student")
  }

    static deleteDocById = (req,res) => {
    res.redirect("/student")
  }


}

export default StudentController;