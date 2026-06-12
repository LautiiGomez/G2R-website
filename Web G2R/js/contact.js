// contact.js - G2R Mining Solutions
// Solo se ejecuta si el formulario existe en la página

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) return; // Si no hay formulario en esta página, no hacer nada

    const fullName = document.getElementById('name');
    const email    = document.getElementById('email');
    const phone    = document.getElementById('phone');
    const subject  = document.getElementById('subject');
    const mess     = document.getElementById('message');

    function sendEmail() {
        const bodyMessage = `Nombre: ${fullName.value}<br>Email: ${email.value}<br>Teléfono: ${phone.value}<br>Mensaje: ${mess.value}`;
        Email.send({
            SecureToken: "50be5312-5465-497a-b323-d2ee59b59679",
            To:      'lautigomezsalvi@gmail.com',
            From:    'lautigomezsalvi@gmail.com',
            Subject: subject.value,
            Body:    bodyMessage
        }).then(message => {
            if (message === "OK") {
                Swal.fire({
                    title: "¡Mensaje enviado!",
                    text: "Revisaremos tu mensaje a la brevedad.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Algo salió mal",
                    text: "Intentá de nuevo en unos segundos."
                });
            }
        });
    }

    function checkInputs() {
        const items = document.querySelectorAll('.item');
        for (const item of items) {
            if (item.value === '') {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
            if (items[1] && items[1].value !== '') checkEmail();
            items[1] && items[1].addEventListener('keyup', checkEmail);
            item.addEventListener('keyup', () => {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            });
        }
    }

    function checkEmail() {
        if (!email) return;
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const errorTxt = document.querySelector('.error-txt.email');
        if (!email.value.match(emailRegex)) {
            email.classList.add('error');
            email.parentElement.classList.add('error');
            if (errorTxt) errorTxt.innerText = email.value !== ''
                ? 'Escriba un email válido'
                : 'Este campo es obligatorio';
        } else {
            email.classList.remove('error');
            email.parentElement.classList.remove('error');
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
        if (fullName && email && phone && subject && mess) {
            if (!fullName.classList.contains('error') &&
                !email.classList.contains('error') &&
                !phone.classList.contains('error') &&
                !subject.classList.contains('error') &&
                !mess.classList.contains('error')) {
                sendEmail();
                form.reset();
            }
        }
    });
});