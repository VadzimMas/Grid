// togle different classes for button for futher styling
let btn_1 = document.querySelectorAll('.btn-1');
var x = window.matchMedia("(max-width: 425px)")
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

