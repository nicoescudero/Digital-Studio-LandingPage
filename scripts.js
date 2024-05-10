//Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddeElements = document.querySelectorAll('.hidden');
hiddeElements.forEach((el) => observer.observe(el));

//Change navbar logo
const check = document.getElementById('check');
const navbarLogo = document.getElementById('menuLogo');

check.addEventListener('change',(elem) => {
  if(elem.target.checked) {
    navbarLogo.src = '/arrow.png';
  } else {
    navbarLogo.src = '/menu.png';
  }
})

//Close Navbar responsive
function closeNavbar() {
  if(check.checked) {
    check.checked = false;
    navbarLogo.src = '/menu.png';
  } else {
    check.checked = true;
  }
}