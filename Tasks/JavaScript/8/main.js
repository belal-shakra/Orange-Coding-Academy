console.log("####### JS DOM #######")

function createInput(type, name, value = "", required = null, style = null){
  const input = document.createElement("input")
  input.setAttribute("type", type)
  input.setAttribute("name", name)
  input.setAttribute("value", value)
  input.setAttribute("style", style)

  return input
}


function createLabel(text, style = null){
  const label = document.createElement("label")
  label.appendChild(document.createTextNode(text))
  label.setAttribute("style", style)
  return label
}





let body = document.body
var form = document.createElement("form")

var field = document.createElement("div")
field.setAttribute("style", "marginclea: 14px auto;")
field.appendChild(
  createLabel("Username", "font-weight: bold;",)
)
field.appendChild(
  createInput("text", "username", "", null, "display: block;")
)

form.appendChild(field)


body.appendChild(form)



console.log("######################")