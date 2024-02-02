function validateForm() {
    const mail = document.forms['formLog']['email'].value;
    const pass = document.forms['formLog']['pass'].value;

    // check email pass tidak empty

    if ( mail == '' || pass == '' ) {
        if ( mail == '') {
            document.querySelector('#error-email').innerHTML = 'Masukan Email Anda!!';
            document.querySelector('#error-email').style.color = 'crimson';
        } else {
            document.querySelector('#error-email').innerHTML = '';
        }
        return false;
    }

    else {
        clearField();
        alert('Thank You!!!');
    }

    function clearField()   {
        document.querySelector('#error-email').innerHTML = '';
        // document.querySelector('#error-pass').innerHTML = '';
        // document.querySelector('error-repass').innerHTML = '';
    }
   
  } 

//   function clear field
