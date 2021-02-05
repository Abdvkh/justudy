const showNavLinks = () => {
    const navigation = document.getElementById('navigation');
    console.log(navigation.className);
    if(navigation.className === 'nav')
        navigation.setAttribute('class', 'nav show');
    else
        navigation.setAttribute('class', 'nav');
};

// instanciate new modal
var modal = new tingle.modal({
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
});

// set content
modal.setContent(
    `<div class="modal">
                <img class="request-modal-image" src="assets/images/girl-with-objects-around-her-by-oblik-studio.svg" alt="Оставить заявку">
                <form class="request-modal-form">
                    <label for="name">
                        <input id="name" type="text" placeholder="Ваше имя*">
                    </label>
                    <label for="contacts">
                        <input id="contacts" type="text" placeholder="Контакты (почта/номер)*">
                    </label>
                    <label for="message">
                        <textarea id="message" cols="30" rows="10" placeholder="Сообщение"></textarea>
                    </label>
                    <button class="btn primary-color">отправить</button>
                </form>
             </div>`);

// open modal
const showRequestForm = () => {
    modal.open();
}

// close modal
const closeModal = () => {
    modal.close();
}

/* Form handling */
function sendFormFilling(e){
    const formData = new FormData();
    const name = document.getElementById('name');
    const contacts = document.getElementById('contacts');
    const message = document.getElementById('message');
    let msg = 'Name: ' + name.value + '\n' +
              'Contacts: ' + contacts.value + '\n' +
              'Message: ' + message.value;

    let url = "https://api.telegram.org/bot1622858568:AAFMsCtuNglEbw-I3BqLu0f7AxatNCM0S0U/sendMessage";

    formData.append('text', msg);
    formData.append('chat_id', 469750202);
    formData.append('parse_mode', 'markdown');

    e.preventDefault();


    fetch(url, {
        method: 'POST',
        body: formData,
    }).then(() => {
        modal.close();
    });
};

const request = document.querySelector('.request-modal-form')
document.addEventListener('submit', sendFormFilling);
