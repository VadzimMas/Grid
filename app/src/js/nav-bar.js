// toggle class active to burger menu and links for futher styling

var burger = document.getElementsByClassName('burger')[0];
var links = document.getElementsByClassName('links')[0];
var body = document.getElementsByTagName('body')[0];
var links_a = links.getElementsByTagName('a');

for (const iterator of links_a) {
    iterator.addEventListener('click',
        function name() {
            for (const iterator2 of links_a) {
                iterator2.classList.remove('active');
            }
            iterator.classList.toggle('active');
        });
}

burger.addEventListener('click',
    function name(params) {
        links.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('active');
    });

