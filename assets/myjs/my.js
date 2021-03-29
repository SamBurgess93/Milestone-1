
/* JS for shaded navbar when scrolled */
$(document).ready(function(){
        $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
        });
});

/* JS for collpasable reviews */
function collapseRadio(radioID) {
    document.getElementById(radioID).checked = false;
}

