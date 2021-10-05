const changeEditor = () => {
  let addStudent = document.querySelector(".add")
  let deleteStudent = document.querySelector(".delete")
  let updateStudent = document.querySelector(".update")
  let select = document.getElementById("select")
  let studentForm = document.querySelector(".editor")
  let submitBtn = document.getElementById("submit")
  let deleteIDInput = document.getElementById("delete-id")

  if (select.value === "delete") {
    addStudent.style.display = "none"
    updateStudent.style.display = "none"
    deleteStudent.style.display = "flex"

    deleteIDInput.addEventListener('input', (event) => {
      console.log(event.target.value)
      let deleteValue = (event.target.value)
      studentForm.setAttribute("action", "/api/students/" + deleteValue + "?_method=DELETE")
    })

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