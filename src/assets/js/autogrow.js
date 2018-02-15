// DELETE ALERT CONFIRMATION
$('.starfy').on('click', function() { // delete alert confirmation
    $(this).parents('.com').find('.conf').show();
});

$('.mbody > .qdel_').on('click', function() { // delete alert
    $(this).parents('.chatc').remove();
    // HERE SEND FEEDBACK TO PLATFORM INFORMING THAT THE USER HAS SEEN AND CLOSED THE ALERT
});

$('.msg.off').on('click', function() {
    $(this).removeClass('off');
    $(this).addClass('on');
    // HERE SEND FEEDBACK TO PLATFORM INFORMING THAT THE USER HAS SEEN AND CLOSED THE ALERT
});

$('.chatp .qdel_').on('click', function() { // delete alert
    var msg = $(this).parents('.msg.on');
    $(msg).removeClass('on');
    $(msg).addClass('off');
    // HERE SEND FEEDBACK TO PLATFORM INFORMING THAT THE USER HAS SEEN AND CLOSED THE ALERT
});
// DELETE ALERT CONFIRMATION END



// POST
$('.article').rdm(); //readmore

$('.pf > .act:nth-child(2)').click(function(){
    var cnt = $(this).parent('.pf').next('.com');
    cnt.slideDown("slow");
    cnt.find('.mco').focus();
});

$('.starp, .bellp').click(function() {
    var $this = $(this);
    $this
        .children('img')
        .each(function(){
            var $star = $(this);
            $star
                .toggleClass('')
                .toggleClass('hide')
        });
});
// POST END




// CHAT
$(".chatm").animate({ scrollTop: $(document).height() }, "fast");

function newMessage() {
    message = $(".newmsg").val();
    if($.trim(message) == '') {
        return false;
    }
    $('<div class="msgp to justsent" style="display:none;"><div class="txt"><span>' + message + '</span></div></div>').appendTo($('.chatm'));
    $('.newmsg').val(null).innerHeight(30);
    $(".justsent").slideDown('fast').removeClass("justsent");
    $(".chatm").animate({ scrollTop: $(document).height() }, "normal");
};

$(".newmsg").on('keydown', function(e) {
  if (e.which == 13 ) {
    newMessage();
    return false;
  }
});
// CHAT END