const productsBtn = document.querySelectorAll('[data-products-open]');


productsBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{toggleText(btn)} )
})
function toggleText(elem){
const hiddenText=elem.parentNode.querySelector("[data-products-text]")
hiddenText.classList.toggle("is-hidden")
elem.classList.toggle("products__btn-translate")
}