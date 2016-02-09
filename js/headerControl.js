/**
 * Dynamically tells css how to render header
 *
 */

function autocollapse() {
    var navbar = $('#dynamicCollapse');
    $(navbar).removeClass('collapsed');
    if ((navbar.innerHeight > 50) || (screen.width < 600)) {
        $(navbar).addClass('collapsed');
        $('.navbar-content').addClass('collapsed');
        console.log("Added collapsed class");
    }
    console.log(screen.width)
}

$(document).ready(autocollapse);
$(window).on('resize', autocollapse);