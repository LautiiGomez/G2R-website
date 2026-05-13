const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nombre: ${fullName.value}<br> Email: ${email.value}<br> Número de Teléfono: ${phone.value}<br> Mensaje: ${mess.value}`;
 
    Email.send({
        SecureToken: "50be5312-5465-497a-b323-d2ee59b59679",
        To : 'programming.g2r@gmail.com',
        From : "programming.g2r@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Mensaje enviado exitosamente!",
                text: "Revisaremos nuestra bandeja de entrada en un momento",
                icon: "success"
              });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops... Algo salió mal!",
                text: "Intenta enviar el mensaje nuevamente dentro de unos segundos",
                //footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Escriba una dirección de correo electrónico válida";
        }
        else { 
            errorTxtEmail.innerText = "Este es un campo obligatorio";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});