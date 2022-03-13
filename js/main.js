// табы для класса list
const allBtn = document.querySelectorAll(".tab, .revies__choice-text");
const allCircle = document.querySelectorAll(".tab-item, .reviews__inner");
let onClickTab = function(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-id");
        let currentCircle = document.querySelector(tabId);
        if (!currentBtn.classList.contains("active")){
            allBtn.forEach(function(item){
                item.classList.remove("active");
            });
            allCircle.forEach(function(item){
                item.classList.remove("active");
            });
            currentBtn.classList.add("active");
            currentCircle.classList.add("active");
        }
    })
}
allBtn.forEach(onClickTab);
document.querySelector(".tab").click(); //  по умолчанию добавляем клик на второй элемент