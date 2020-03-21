
let tabletMenu = document.querySelector('.tablet-menu-drop');
let tabletMenuBtn = document.querySelector('.open-menu');
let mask = document.querySelector('.mask-dis');
let modal = document.querySelector('.modal-dis');
let filterBtn = document.querySelector('.filterBtn');
let closeModal = document.querySelector('.close-modal');
let searchBtn = document.querySelector('.search-tablet');
let mobileSearchInput = document.querySelector('.mobile-search-dis');


let tabletMenuActive = function(){
    tabletMenuBtn.addEventListener('click', function(event){
        event.preventDefault();
        tabletMenu.classList.toggle('tablet-menu-drop_dis');
    })
}
tabletMenuActive()

let mobileFilter = function(){
    filterBtn.addEventListener('click', function(event){
        event.preventDefault();
        mask.classList.toggle('mask-active');
        modal.classList.add('modal');
        modal.classList.remove('modal-dis');
    })
    closeModal.addEventListener('click', function(event){
        event.preventDefault();
        mask.classList.toggle('mask-active');
        modal.classList.remove('modal');
        modal.classList.add('modal-dis');
    })
}
mobileFilter();

let mobileSearch = function(){
    searchBtn.addEventListener('click', function(){
        if (document.documentElement.clientWidth <= 320){
            mobileSearchInput.classList.toggle('mobile-search');
        }

    })
}
mobileSearch();