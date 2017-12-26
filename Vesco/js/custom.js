/*==================================================================
                        SERVICES
==================================================================*/

$(function() {
    // animate on scroll
    new WOW().init();
});

/*==================================================================
                        WORK
==================================================================*/

$(function() {
    // bug lower case function
    // bug "(function)(){" should be (function(){

    $("#work") .magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image', // , to turn include gallery
        gallery: {
            enabled: true
        }
    });
});

/*==================================================================
                        TEAM
==================================================================*/

$(function() {
    
  $("#team-members").owlCarousel();
    
});