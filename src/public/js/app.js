function validateForm() {
          var n = document.getElementById('name').value;
          var e = document.getElementById('email').value;
          var s = document.getElementById('subject').value;
          var m = document.getElementById('message').value;
          var onlyLetters = /^([a-z ñáéíóú]{2,60})$/i;
          var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


          if (n == "" || n == null) {
            document.getElementById('nameLabel').innerHTML = ('Ingresa tu nombre por favor');
            document.getElementById('name').style.borderColor = "red";
            return false;
          }


          if (!n.match(onlyLetters)) {
            document.getElementById('nameLabel').innerHTML = ('Ingresa solo letras por favor');
            document.getElementById('name').style.borderColor = "red";
            return false;
          }

          if (e == "" || e == null) {
            document.getElementById('emailLabel').innerHTML = ('Ingresa tu email por favor');
            document.getElementById('email').style.borderColor = "red";
            return false;
          }

          if (!e.match(onlyEmail)) {
            document.getElementById('emailLabel').innerHTML = ('Ingresa una cuenta de email valida por favor');
            document.getElementById('email').style.borderColor = "red";
            return false;
          }

          if (s == "" || s == null) {
            document.getElementById('subjectLabel').innerHTML = ('Por favor, ingresa el asunto');
            document.getElementById('subject').style.borderColor = "red";
            return false;
          }

        //   if (!s.match(onlyLetters)) {
        //     document.getElementById('subjectLabel').innerHTML = ('Por favor, ingresa solo letras');
        //     document.getElementById('subject').style.borderColor = "red";
        //     return false;
        //   }

          if (m == "" || m == null) {
            document.getElementById('messageLabel').innerHTML = ('Por favor, ingresa un mensaje');
            document.getElementById('message').style.borderColor = "red";
            return false;
          }

          else {
            return true;
          }

        }


const contactForm = document.querySelector('.form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Mensaje enviado');

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (validateForm() === true) {
            xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.responseText == 'success') {
                alert('Mensaje enviado!');
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
                document.getElementById('nameLabel').innerHTML = ('');
                document.getElementById('emailLabel').innerHTML = ('');
                document.getElementById('subjectLabel').innerHTML = ('');
                document.getElementById('messageLabel').innerHTML = ('');
            } else {
                alert('Oops!, algo salio mal...')
            }
        }
    }
    xhr.send(JSON.stringify(formData));
});

