const addProductForm = document.querySelector(".add-product-form")
const updateButton = document.querySelector(".update-product")
const updateSubmit = document.querySelector("#modal-submit")
addProductForm.addEventListener("submit", addProduct)
updateButton.addEventListener("click", updateProduct)
updateSubmit.addEventListener("click", updateModal)

function updateModal(e) {
    e.preventDefault()
    let modal = document.querySelector(".modal-container")
    modal.classList.add("hidden")
    Swal.fire({
        title: '!Bien hecho¡',
        text: 'Se ha modificado tu producto',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
}

function addProduct(e) {
    e.preventDefault()
    Swal.fire({
        title: '!Bien hecho¡',
        text: 'Se ha agregado tu producto',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
}

function updateProduct(e) {
    let modal = document.querySelector(".modal-container")

    modal.classList.remove("hidden")
    let modalValue = document.querySelector("#modal-value")
    let modalId = document.querySelector("#modal-id")
    let modalDescription = document.querySelector("#modal-description")
    let productValueElement = e.currentTarget.parentElement.previousElementSibling
    let productDescriptionElement = productValueElement.previousElementSibling
    let productIdElement = productDescriptionElement.previousElementSibling
    modalValue.value = productValueElement.textContent
    modalId.value = productIdElement.textContent
    modalDescription.value = productDescriptionElement.textContent
}