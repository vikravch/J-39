console.log("Hello JS")
console.log(typeof console)
console.log(typeof document)
//document.write('<a href="https://google.com">Hello I try to write to Document</a>')

var detailedImage = document.querySelector('.detailed-image');
var detailedTitle = document.querySelector('.detailed-title');
var detailedContainer = document.querySelector('.detailed-container')

console.log(typeof detailedContainer)
function hideDetails(){
    console.log("Ok, I will hide details")
    detailedContainer.classList.add('hidden')
}
function showDetails(){
    detailedContainer.classList.remove('hidden')
}

function getThumbnails(){
    var listItems = document.querySelectorAll('a')
    console.log(`items a count - ${listItems.length}`)
    return listItems
}

function eventListenerAdding(thumbnail){
    thumbnail.addEventListener('click',function (event){
        event.preventDefault()
        console.log("Hello from Event listener!")
        detailedImage.setAttribute('src',thumbnail.getAttribute('href'))
        detailedTitle.textContent = thumbnail.getAttribute('data-detailed-title')
        showDetails()
    })
}

var resList = getThumbnails()
resList.forEach(eventListenerAdding)

var array = [3,2,56,12,4]
console.log(array)

function printElementFromArray(value,i){
    console.log(`i - ${i} value - ${value}`)
}

array.forEach(printElementFromArray)