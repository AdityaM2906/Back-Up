for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",handleClick)
}

function handleClick() {
    alert("I got clicked!")
}