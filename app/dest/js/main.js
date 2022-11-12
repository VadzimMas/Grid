// toggle class active to burger menu and links for futher styling
var burger = document.getElementsByClassName('burger')[0];
var links = document.getElementsByClassName('links')[0];
var body = document.getElementsByTagName('body')[0];
var links_a = links.getElementsByTagName('a');


// adds listener for staling nav-bar links and remuving menu when link pressed
for (const iterator of links_a) {
    iterator.addEventListener('click',
        () => {
            // when link was pressed remove class='active' from all links
            for (const iterator2 of links_a) {
                iterator2.classList.remove('active');
            }
            // and set class='active' for pressed link
            iterator.classList.toggle('active');
            // if burger, links, body has class='active' toggle it
            if (burger.classList.contains('active')) {
                toggleMenu();
            }
        });
}

burger.addEventListener('click', toggleMenu);

// toggles classes for sspecific styling in css
function toggleMenu() {
    links.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
}



// togle different classes for button for futher styling
let btn_1 = document.querySelectorAll('.btn-1');
var x = window.matchMedia("(max-width: 768px)");
// Call listener function at run time
myFunction(x);
// Attach listener function on state changes
x.addListener(myFunction);

function myFunction(x) {
    if (x.matches) {
        for (const iterator of btn_1) {
            iterator.classList.replace('btn-1', 'btn-2');
        }
    } else {
        for (const iterator of btn_1) {
            iterator.classList.replace('btn-2', 'btn-1');
        }
    }
}


section_1_desktop = document.getElementsByClassName('section-1')[0];
section_1_mobile = document.getElementsByClassName('section-1')[1];
//first run
setId();

addEventListener('resize', setId);

function setId() {
    section_1_mobile.removeAttribute('id', '1');
    section_1_desktop.removeAttribute('id', '1');
    if (window.matchMedia("(max-width: 768px)").matches) {
        section_1_mobile.setAttribute('id', '1');
    } else {
        section_1_desktop.setAttribute('id', '1');
    }
}
