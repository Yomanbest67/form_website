function check() {
    var confirmInput = document.querySelector('#confirm-pswd');
    var initialInput = document.querySelector('#pswd');
    if (confirmInput.value != initialInput.value) {
        confirmInput.setCustomValidity('Password Must be Matching.');
        confirmInput.style.borderColor = 'red';
    } else {
        confirmInput.setCustomValidity('');
        confirmInput.style.borderColor = 'black';
    }
}