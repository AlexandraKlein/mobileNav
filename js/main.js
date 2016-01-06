/**
 * Created by alexandraklein on 1/5/16.
 */

$(document).ready(function(){
    $('a.open-menu').click(function(e){
        var body = $('body'),
            menu = $('.menu'),
            isOpen = body.hasClass('open'),
            scrollValue = isOpen ? -parseInt(body[0].style.top) : body.scrollTop();

        menu.toggleClass('open',!isOpen); // adds 'height: 100%'
        body.toggleClass('open',!isOpen); // adds 'position: fixed'

        if(!isOpen){
            body.css('top', -scrollValue);
            menu.scrollTop(0);
        } else {
            body.scrollTop(scrollValue);
        }
    });
});
