document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded')

    const form = document.querySelector('#new-form'); //1
    form.addEventListener('submit', handleFormInput)

   
   
   
    const shoppingList = document.querySelector('#deletebutton') //2
    shoppingList.addEventListener('click', handleDeleteAll)

})  


const handleFormInput = function (event) {              //1
    event.preventDefault()
    console.log(event.target.expired.value)
    const newElement = document.createElement('li')
    newElement.textContent = `Food: ${event.target.title.value} Food Type: ${event.target.type.value} Expired? ${event.target.expired.value}`
    const list = document.querySelector('#shoppingList')
    list.appendChild(newElement)
}



const handleDeleteAll = function (event) {                 //2
    event.preventDefault()
    console.log(event)
    const selectDelete = document.querySelector("#shoppingList");
    selectDelete.textContent = ""; 

}


