const parrafos = document.querySelectorAll("p")
const trash = document.querySelector(".trash")
const seccion = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData(`id`, event.target.id)
    })

    parrafo.addEventListener("dragend", event => {
        parrafo.classList.remove("dragging")
    })
}
)

trash.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

trash.addEventListener("drop", event => {
    const parrafo = event.dataTransfer.getData("id")
    console.log(parrafo);
    const getParrafo = document.getElementById(parrafo)
    getParrafo.remove()
    })