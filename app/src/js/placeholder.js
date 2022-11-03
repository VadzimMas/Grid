/* 
    working with placeholder.css  
    add class .palceholder to pickture element
    and add onload="loaded('this')" atribute

    loaded.js first adds class .loaded to img element
    second rmove class .placeholder from picture element
*/
function loaded(object) {
    var img = object;
    var picture = img.parentElement;

    setTimeout(() => {
        picture.classList.remove('placeholder');
    }, 1000);

    img.classList.add('loaded');
}