$(document).ready(function(){
    $('.statistic__chart').addClass('loaded');

    // для зеленых
    $('.statistic__graph__active .statistic__graph__winner .statistic__graph__bar').each(function(index) {   
        var that = $(this);
        var t = setTimeout(function() { 
            that.addClass('loaded'); 
        }, 20 * index);        
    });
    // для красных
    $('.statistic__graph__active .statistic__graph__lose .statistic__graph__bar').each(function(index) {     
        var that = $(this);
        var t = setTimeout(function() { 
            that.addClass('loaded'); 
        }, 20 * index);        
    });


    var popups = $('.statistic__popup');
    $('body').on('click', function(){
        popups.fadeOut(50);
    })
    $('.statistic__graph__bar.active').on('mouseenter', function(){
        popups.fadeOut(50);
        var popup = $(this).siblings('.statistic__popup');
        var offsetLeft = $(this).offset().left;
        var popupWidth = popup.outerWidth();
        //console.log($(this).offset());
        var isWinner = true;
        if($(this).parents('.statistic__graph__row').hasClass('statistic__graph__winner')) {
            isWinner = true;
            popup.removeClass('bottom').addClass('top');
        } 
        else {
            isWinner = false;
            popup.removeClass('top').addClass('bottom');
        }

        if(offsetLeft < (popupWidth / 2) ) {
            popup.removeClass('center right').addClass('left');
        } 
        else if( ($(window).outerWidth() - offsetLeft) < (popupWidth / 2) && offsetLeft > (popupWidth / 2)) {
            popup.removeClass('center left').addClass('right');
        } 
        else {
            popup.removeClass('right left').addClass('center');
        }
        popup.fadeIn(100);
    });

    // анимация цифр
    if(document.querySelector('.animate-num')) {
        function animateNum(node, time) {
            var num = parseFloat(node.data('animate'));
            node.animateNumber({ number: num }, time); 
        }
        console.log('asd')
        animateNum($('.animate-num-1'), 2500);
        animateNum($('.animate-num-2'), 2500);
        animateNum($('.animate-num-3'), 2500);
        animateNum($('.animate-num-4'), 2500);
    }
    
});

