const fields = document.querySelectorAll("[imagem]")

console.log(fields)

for ( field of fields ){
     field.addEventListener("invalid", event => {
        console.log("campo inválido")
     })
}





document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    event.preventDefault()
})