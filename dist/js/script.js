document.addEventListener('DOMContentLoaded', () => {

    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadline = '2020-09-30';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }



    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //Modal

    const modalBtns = document.querySelectorAll('[data-modal]'),
        modalBtnW = modalBtns[0],
        modalBtnB = modalBtns[1],
<<<<<<< HEAD
        modalWindow = document.querySelector('.modal');

=======
        modalWindow = document.querySelector('.modal'),
        modalClose = modalWindow.querySelector('[modal-close]');
>>>>>>> 88846b192262056760961a7c071fd942de98c368


    modalBtns.forEach(item => {
        item.addEventListener('click', openModal);
    });

    function openModal() {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    }




    modalWindow.addEventListener('click', (e) => {
<<<<<<< HEAD
        if (e.target === modalWindow || e.target.getAttribute('data-close')== '') {
=======
        if (e.target === modalWindow) {
>>>>>>> 88846b192262056760961a7c071fd942de98c368
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modalWindow.style.display == 'block') {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 60000);

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

<<<<<<< HEAD

    //Constructor

=======
    //Constructor

>>>>>>> 88846b192262056760961a7c071fd942de98c368
    class Menu {
        constructor(img, alt, title, desc, price, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.classes = classes;
        }
        push() {
            const menuField = document.querySelector('.menu__field');
            const menu = menuField.querySelector('.container');
            const newMenu = document.createElement('div');

            if (this.classes.length == 0) {
                newMenu.classList.add('menu__item');
            } else {
                newMenu.classList.add('menu__item');
                this.classes.forEach(item => newMenu.classList.add(item));
            }

            newMenu.innerHTML = `<img src=${this.img} alt=${this.alt}>`;
            newMenu.innerHTML += `<h3 class="menu__item-subtitle">Меню "${this.title}"</h3>`;
            newMenu.innerHTML += `<div class="menu__item-descr">${this.desc}</div>`;
            newMenu.innerHTML += '<div class="menu__item-divider"></div>';
            newMenu.innerHTML += '<div class="menu__item-price"</div>';
            const menuItimPrice = newMenu.querySelector('.menu__item-price');
            menuItimPrice.innerHTML = '<div class="menu__item-cost">Цена:</div>';
            menuItimPrice.innerHTML += `<div class="menu__item-total"><span>${this.price}</span> грн/день</div>`;
            menu.append(newMenu);
        }
    }

    //Forms
    
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо!',
        failure: 'Что-то не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);


            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            const json = JSON.stringify(object);


            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }

    //Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо!',
        failure: 'Что-то не так...'
    };

    forms.forEach(item =>{
        postData(item);
    });
    function postData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);


            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);

            const object = {}; 
            formData.forEach(function(value,key){
                object[key] = value;
            });
            const json = JSON.stringify(object);


            request.send(json);
        
            request.addEventListener('load', ()=>{
                if (request.status === 200){
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                        statusMessage.remove();   
                }
                else{
                    showThanksModal(message.failure);
                }
            });
        });
    }

    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class = 'modal__content'>
            <div class = 'modal__close' data-close>&times;</div>
            <div class='modal__title'>${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);    
    }


});