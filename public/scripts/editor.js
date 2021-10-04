const changeEditor = () => {
  addStudent = document.querySelector(".add")
  deleteStudent = document.querySelector(".delete")
  updateStudent = document.querySelector(".update")
  select = document.getElementById("select")

  if (select.value === "delete") {
    addStudent.style.display = "none"
    updateStudent.style.display = "none"
    deleteStudent.style.display = "flex"
  } else if (select.value === "update") {
    deleteStudent.style.display = "none"
    addStudent.style.display = "none"
    updateStudent.style.display = "flex"
  } else if (select.value === "add") {
    deleteStudent.style.display = "none"
    updateStudent.style.display = "none"
    addStudent.style.display = "flex"
  }
}

const redirect = () => {
  window.location.href = "/students"
}

module.exports = { changeEditor, redirect }