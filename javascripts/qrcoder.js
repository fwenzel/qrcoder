(function() {

var qrcode = new QRCode('qrcode');
var txt = document.getElementById('qrtext');

function makeCode() {
    if (!txt.value) {
        alert('Input a text');
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

})();
