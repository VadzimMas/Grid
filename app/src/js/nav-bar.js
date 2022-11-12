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


