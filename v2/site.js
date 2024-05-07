window.onload = function () {
    setYear();
    setPhotoOffset();
}

function setYear() {
    var elem = document.getElementById("jb-year");
    if (!elem) {
        console.error("Could not get element 'jb-year'");
        return;
    }

    var today = new Date();
    elem.innerHTML = today.getFullYear()
}

function setPhotoOffset() {
    var row = document.getElementById("photo-row");
    if (!row) {
        console.error("Could not get element 'photo-row'");
        return;
    }

    var offset = (-1) * (row.clientHeight);

    row.style.marginTop = offset;
}