window.onload = function () {
    setYear();
    setPhotoOffset();    
}

window.onresize = function () {
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
    var elem = getElem("details-block");
    if (!elem)
        return;
    var blockHeight = elem.clientHeight;

    var elem = getElem("details");
    if (!elem) 
        return;
    var detailsHeight = elem.clientHeight;

    var elem = getElem("photo1");
    if (!elem)
        return;
    var photoHeight = elem.clientHeight;

    var offset = (blockHeight - detailsHeight - photoHeight);
    offset = (-1) * (offset / 2);

    row.style.marginTop = offset;
}

function getElem(name) {
    var elem = document.getElementById(name);
    if (!elem) {
        console.error("Could not get element '"+name+"'");
        return null;
    }
}