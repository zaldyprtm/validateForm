function validateForm() {
    const mail = document.forms['formLog']['email'].value;
    const pass = document.forms['formLog']['pass'].value;
    const passW = document.forms['formLog']['passW'].value


    // check email pass tidak empty

    if ( mail == '' || pass == '' || passW == '') {
        if ( mail == '') {
            document.querySelector('#error-email').innerHTML = 'Masukan Email Anda!!';
            document.querySelector('#error-email').style.color = 'crimson';
        } else {
            document.querySelector('#error-email').innerHTML = '';
        }

        if ( pass == '' ) {
            document.querySelector('#error-pass').innerHTML = 'Masukan Password Anda!';
            document.querySelector('#error-pass').style.color = 'crimson';
        }

        if ( passW == '' ) {
            document.querySelector('#error-passW').innerHTML = 'Masukan Password Anda!';
            document.querySelector('#error-passW').style.color = 'crimson';
        }

        return false;
    }

    else {
        clearField();
        alert('Thank You!!! Your data will be processed');
    }

    function clearField()   {
        document.querySelector('#error-email').innerHTML = '';
        // document.querySelector('#error-pass').innerHTML = '';
        // document.querySelector('error-repass').innerHTML = '';
    }
   
  } 

//   Show password Toggle

const togglePass = document.querySelector('#toggleEye');
const togglePas = document.querySelector('#toggleEyes');
const pass = document.querySelector('#pass');
const passW = document.querySelector('#passW');

togglePass.addEventListener('click', function () {
    const type = pass.getAttribute('type') === 'pass' ? 'text': 'pass';
    pass.setAttribute('type', type);

    this.classList.toggle('bi-eye-slash');
});

togglePas.addEventListener('click', function () {
    const type = passW.getAttribute('type') === 'passW' ? 'text': 'passW';
    passW.setAttribute('type', type);

    this.classList.toggle('bi-eye-slash');
});


// prevent default form submit


const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

// dark mode toggle

const toggleDark = document.querySelector('#dark-toggle');
const loginBox = document.querySelector('#login-box');

toggleDark.addEventListener('click', function (){
    if (toggleDark.checked ) {
        loginBox.classList.add('dark');
    }else {
        loginBox.classList.remove('dark')
    }

    toggleDark.style.color = 'blue';
});

