(function() {

var qrcode = new QRCode('qrcode');
var txt = document.getElementById('qrtext');
var submit = document.getElementById('submit');

function makeCode() {
    if (!txt.value) {
        alert('Enter some text to generate a QR code.');
        txt.focus();
        return;
    }

    qrcode.makeCode(txt.value);
}

makeCode();

txt.addEventListener('blur', makeCode);
txt.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});
txt.addEventListener('focus', function() {
    this.select();
});
submit.addEventListener('click', makeCode);

})();
