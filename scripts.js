
let sidebarBox = document.querySelector('.box'),
    sidebarBtn = document.querySelector('.btn'),
    pageWrapper = document.querySelector('.page-wrapper');



let htmlElements = "";
for (let i = 0; i < 7; i++) {
    htmlElements += '<div class="item">List Item</div>';
}
let container = document.getElementById("container");
container.innerHTML = htmlElements;

sidebarBtn.addEventListener('click', event => {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});

pageWrapper.addEventListener('click', event => {

    if (sidebarBox.classList.contains('active')) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
    }
});

window.addEventListener('keydown', event => {

    if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
    }
});
