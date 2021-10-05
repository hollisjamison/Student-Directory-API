const changeEditor = () => {
  let select = document.getElementById("select")
  let addForm = document.querySelector(".addForm")
  let updateForm = document.querySelector(".updateForm")
  let deleteForm = document.querySelector(".deleteForm")
  let deleteIDInput = document.getElementById("delete-id")
  let updateIDInput = document.getElementById("update-id")

  if (select.value === "delete") {
    addForm.style.display = "none"
    updateForm.style.display = "none"
    deleteForm.style.display = "flex"
    deleteForm.style.flexDirection = "column"

    deleteIDInput.addEventListener('input', (event) => {
      console.log(event.target.value)
      let deleteValue = (event.target.value)
      deleteForm.setAttribute("action", "/api/students/" + deleteValue + "?_method=DELETE")
    })

  } else if (select.value === "update") {
    deleteForm.style.display = "none"
    addForm.style.display = "none"
    updateForm.style.display = "flex"
    updateForm.style.flexDirection = "column"

    updateIDInput.addEventListener('input', (event) => {
      console.log(event.target.value)
      let updateValue = (event.target.value)
      updateForm.setAttribute("action", "/api/students/" + updateValue + "?_method=PUT")
    })

  } else if (select.value === "add") {
    deleteForm.style.display = "none"
    updateForm.style.display = "none"
    addForm.style.display = "flex"
    addForm.style.flexDirection = "column"
    addForm.setAttribute("action", "/api/students/")
  }
}