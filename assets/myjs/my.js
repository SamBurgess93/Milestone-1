$(document).ready(function(){
        $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
        });
});

function collapseRadio(radioID) {
    document.getElementById(radioID).checked = false;
}