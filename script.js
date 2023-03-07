$(document).ready(function(){

    var width = $('#eventSlide').width();

    $('#right').click(function(){
        $('#eventSlide').animate({
            left: - width
        }, function(){
            $('.slide:first-child').appendTo('#eventSlide')
            $('#eventSlide').css({
                left:0
            })
        })
    })

    $('#left').click(function(){
        $('#eventSlide').animate({
            left: + width
        }, function(){
            $('.slide:last-child').prependTo('#eventSlide')
            $('#eventSlide').css({
                left:0
            })
        })
    })
})
