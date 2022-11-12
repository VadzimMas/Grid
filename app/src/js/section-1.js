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