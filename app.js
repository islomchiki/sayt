let menutoggle = document.querySelector('.togler');
menutoggle.onclick = function () {
    menutoggle.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
}

const menu = document.querySelector('.nav');
const menubtn = document.querySelector('.togler');


const body = document.body;

if (menu && menubtn) {
    menubtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    })
}