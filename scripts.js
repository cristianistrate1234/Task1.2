let sidebarBox = document.querySelector('.sideMenuBox'),
    sidebarBtn = document.querySelector('.buttonMenu'),
    pageWrapper = document.querySelector('.page-wrapper');
    divItemsBox = document.querySelector('.divItemsBox');

const listItem = ['List Item 01' , 'List Item 02' , 'List Item 03' , 'List Item 04' ,
    'List Item 05' , 'List Item 06' , 'List Item 07' , 'List Item 08'];

listItem.forEach((e) =>{
   let div = document.createElement('div');
    divItemsBox.appendChild(div);
    div.setAttribute('class' , 'listItem');
    div.innerHTML = e;
})

sidebarBtn.addEventListener('click', (e) => {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});

pageWrapper.addEventListener('click', (e) => {
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
