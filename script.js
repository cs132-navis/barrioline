let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
  var i;
    var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
  }
    x[slideIndex-1].style.display = "block";  
}

var MLslideIndex = 1;
showDivs2(MLslideIndex);

function plusDivs2(n) {
    showDivs2(MLslideIndex += n);
}

function showDivs2(n) {
  var i;
    var x = document.getElementsByClassName("MLslides");
  if (n > x.length) {MLslideIndex = 1}
    if (n < 1) {MLslideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
  }
    x[MLslideIndex-1].style.display = "block";  
}