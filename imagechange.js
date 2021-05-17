function changeImage() {
    var bulbimage = document.getElementById('myImage');
    if (bulbimage.src.match("bulbon")) {
        bulbimage.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        bulbimage.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}