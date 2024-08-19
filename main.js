window.addEventListener('scroll', () =>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})   

const menuItem = document.querySelectorAll('.nav-link');
const menuLen = menuItem.length;

for (let i = 0; i < menuLen; i++) {
  menuItem[i].addEventListener('click', function () {
    for (let j = 0; j < menuLen; j++) {
      menuItem[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

// const menu = document.querySelector('.nav_menu')
// const menuBtn = document.querySelector('#open-menu-btn')
// const closeBtn = document.querySelector('#close-menu-btn')

// menuBtn.addEventListener('click', () =>{
//   menu.style.display = 'flex';
//   closeBtn.style.display = 'inline-block';
//   menuBtn.style.display = 'none';
// });

// const closeNav = () => {
//   menu.style.display = 'none';
//   closeBtn.style.display = 'none';
//   menuBtn.style.display = 'inline-block';
// };
// closeBtn.addEventListener('click', closeNav)

/* ========================= SVG MENU TOGGLE =================*/
let isExpanded = false;
const card = document.querySelector(".nav_menu");
const row = document.querySelector(".svgMenu");
const animate1 = document.querySelector(".animate1");
const animate2 = document.querySelector(".animate2");
const animate3 = document.querySelector(".animate3");

// Keyframes
const values1 = [
  "M 84,24 C 84,24 61.333333,24.001 50,24.001 38.666667,24.001 16,24 16,24",
  "M 82,24 C 82,24 66.957389,30.5 50,30.5 33.042611,30.5 18,24 18,24",
  "M 80,24 C 80,24 61.663104,37 50,37 38.336896,37 20,24 20,24",
  "M 78,24 C 78,24 55.685686,43.5 50,43.5 44.314314,43.5 22,24 22,24",
  "M 76,24 C 76,24 50.055365,50 50,50 49.94463,50 24,24 24,24"
];
const values2 = [
  "M 84,50 H 50 16",
  "M 75.5,50 H 50 24.5",
  "M 67,50 H 50 33",
  "M 58.5,50 H 50 41.5",
  "M 50.001,50 H 50 49.99"
];
const values3 = [
  "M 84,76 C 84,76 61.333333,76.001 50,76.001 38.666667,76.001 16,76 16,76",
  "M 82,76 C 82,76 66.957389,69.5 50,69.5 33.042611,69.5 18,76 18,76",
  "M 80,76 C 80,76 61.663104,63 50,63 38.336896,63 20,76 20,76",
  "M 78,76 C 78,76 55.685686,56.5 50,56.5 44.314314,56.5 22,76 22,76",
  "M 76,76 C 76,76 50.055365,50 50,50 49.944635,50 24,76 24,76"
];

function toggleAnimation(values, animate) {
  animate.setAttribute(
    "values",
    !isExpanded ? values.join("; ") : values.slice().reverse().join("; ")
  );
  animate.beginElement();
}

function handleClick() {
  isExpanded = row.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    card.classList.remove("active");
  } else {
    card.classList.add("active");
  }

  toggleAnimation(values1, animate1);
  toggleAnimation(values2, animate2);
  toggleAnimation(values3, animate3);

  row.setAttribute("aria-expanded", !isExpanded);
  row.setAttribute("aria-label", !isExpanded ? "Close Menu" : "Open Menu");
}

function initPath(clazz, descriptor) {
  const path = document.querySelector(clazz);
  path.setAttribute("d", descriptor);
}

initPath(".path1", values1[0]);
initPath(".path2", values2[0]);
initPath(".path3", values3[0]);

row.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    row.click();
  }
});



/*===================== SHOW MENU ================= */
// const navMenu = document.querySelector('.nav_menu'),
//           navToggle = document.querySelector('#open-menu-btn'),
//           navClose = document.querySelector('#close-menu-btn')

// /*===================== MENU SHOW  ================= */
// // Validate if constant exists
// if(navToggle){
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add('show-menu')
//   })
// }
// /*===================== MENU HIDDEN  ================= */
// //Validate if constant exists
// if(navClose){
//   navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu')
//   })
// }




const caretOpen = document.querySelector('#open_caret');
const caretClose = document.querySelector('#close_caret');
const drop = document.querySelector('.drop_down');

caretOpen.addEventListener('click', function(){
  drop.style.display = 'block';
  caretOpen.style.display = 'none';
  caretClose.style.display = 'inline-block';
});
caretClose.addEventListener('click', function(){
  drop.style.display = 'none';
  caretOpen.style.display = 'inline-block';
  caretClose.style.display = 'none'
});


/*===================== SCROLL REVEAL ANIMATION  ================= */
const sr = ScrollReveal({
  distance: '200px',
  duration: 3000,
})
// sr.reveal( `.home_data`, {origin: 'top', delay: 400});
sr.reveal( `.scrollLeft`, {origin: 'left', delay: 200});
sr.reveal( `.scrollRight`, {origin: 'right', delay: 300});
// sr.reveal(`.home_img , .home_footer`, {origin: 'bottom', delay: 400});



// const toggleButton = document.getElementById('toggleButton');
// const content = document.getElementById('main_left');

// toggleButton.addEventListener('click', () => {
//   if (content.style.display === 'none') {
//     content.style.display = 'block';
//     toggleButton.textContent = 'Close';
//   } else {
//     content.style.display = 'none';
//     toggleButton.textContent = 'Open';
//   }
// });



// const form = document.querySelector('.timess');
// const formbtn = document.getElementById('register');
// const closeForm = document.getElementById('closeregister');

// function open() {
//   form.style.display = 'inline-block';
//   closeForm.style.display = 'inline-block';
//   formbtn.style.display = 'none';
// };

// function close() {
//   form.style.display = 'none';
//   closeForm.style.display = 'none';
//   formbtn.style.display = 'inline-block';
// };
