// toggle class active to burger menu and links for futher styling

var burger = document.getElementsByClassName('burger')[0];
var links = document.getElementsByClassName('links')[0];
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
    });


// togle different classes for button for futher styling
let btn_1 = document.querySelectorAll('.btn-1');
var x = window.matchMedia("(max-width: 768px)")
// Call listener function at run time
myFunction(x);
// Attach listener function on state changes
x.addListener(myFunction);

function myFunction(x) {
    if (x.matches) {
        for (const iterator of btn_1) {
            iterator.classList.replace('btn-1', 'btn-2');
        }
        console.log(btn_1);
    } else {
        for (const iterator of btn_1) {
            iterator.classList.replace('btn-2', 'btn-1');
            console.log(btn_1);
        }
    }
}


