/* Bootsmooth App Init */

$(function() {
    
    // initialize show menu buttons
    var showMenu = $('.show-menu');
    if (showMenu.length > 0) {
        showMenu.on('click', function(e) {
            e.preventDefault();
            console.log(e);
            $(e.target.hash).slideToggle();
        });
    }
    
});
