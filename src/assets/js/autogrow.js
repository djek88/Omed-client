// DELETE ALERT CONFIRMATION
$('.starfy').on('click', function() { // delete alert confirmation
    $(this).parents('.com').find('.conf').show();
});
$('.delc').on('click', function() { // delete alert confirmation
    $(this).siblings('.conf').show();
});
$('.ccl').on('click', function() {
    $(this).parents('.conf').hide();
});
$('.cnf').on('click', function() {
    $(this).parents('.alt').remove();
    // HERE SEND FEEDBACK TO PLATFORM INFORMING THAT THE USER HAS SEEN AND CLOSED THE ALERT
});

$('.qdel').on('click', function() { // delete alert
    $(this).parent().remove();
    // HERE SEND FEEDBACK TO PLATFORM INFORMING THAT THE USER HAS SEEN AND CLOSED THE ALERT
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



// POST CREATE
$('.bpx > li').on('click', function() {
    $('.bpx > li').removeClass('active');
    $(this).addClass('active')
    $('.tabsc').hide();
    var activeTab = $(this).attr('link');
    $(activeTab).show();
    return false;
});

;(function($){
    //pass in just the context as a $(obj) or a settings JS object
    $.fn.autogrow = function(opts) {
        var that = $(this).css({overflow: 'hidden', resize: 'none'}) //prevent scrollies
            , selector = that.selector
            , defaults = {
                context: $(document) //what to wire events to
                , animate: true //if you want the size change to animate
                , speed: 100 //speed of animation
                , fixMinHeight: true //if you don't want the box to shrink below its initial size
                , cloneClass: 'autogrowclone' //helper CSS class for clone if you need to add special rules
                , onInitialize: false //resizes the textareas when the plugin is initialized
            }
        ;
        opts = $.isPlainObject(opts) ? opts : {context: opts ? opts : $(document)};
        opts = $.extend({}, defaults, opts);
        that.each(function(i, elem){
            var min, clone;
            elem = $(elem);
            //if the element is "invisible", we get an incorrect height value
            //to get correct value, clone and append to the body. 
            if (elem.is(':visible') || parseInt(elem.css('height'), 10) > 0) {
                min = parseInt(elem.css('height'), 10) || elem.innerHeight();
            } else {
                clone = elem.clone()
                    .addClass(opts.cloneClass)
                    .val(elem.val())
                    .css({
                        position: 'absolute'
                        , visibility: 'hidden'
                        , display: 'block'
                    })
                ;
                $('body').append(clone);
                min = clone.innerHeight();
                clone.remove();
            }
            if (opts.fixMinHeight) {
                elem.data('autogrow-start-height', min); //set min height                                
            }
            elem.css('height', min);
            
            if (opts.onInitialize && elem.length) {
                resize.call(elem[0]);
            }
        });
        opts.context
            .on('keyup paste', selector, resize)
        ;

        function resize (e){
            var box = $(this)
                , oldHeight = box.innerHeight()
                , newHeight = this.scrollHeight
                , minHeight = box.data('autogrow-start-height') || 0
                , clone
            ;
            if (oldHeight < newHeight) { //user is typing
                this.scrollTop = 0; //try to reduce the top of the content hiding for a second
                opts.animate ? box.stop().animate({height: newHeight}, opts.speed) : box.innerHeight(newHeight);
            } else if (!e || e.which == 8 || e.which == 46 || (e.ctrlKey && e.which == 88)) { //user is deleting, backspacing, or cutting
                if (oldHeight > minHeight) { //shrink!
                    //this cloning part is not particularly necessary. however, it helps with animation
                    //since the only way to cleanly calculate where to shrink the box to is to incrementally
                    //reduce the height of the box until the $.innerHeight() and the scrollHeight differ.
                    //doing this on an exact clone to figure out the height first and then applying it to the
                    //actual box makes it look cleaner to the user
                    clone = box.clone()
                        //add clone class for extra css rules
                        .addClass(opts.cloneClass)
                        //make "invisible", remove height restriction potentially imposed by existing CSS
                        .css({position: 'absolute', zIndex:-10, height: ''}) 
                        //populate with content for consistent measuring
                        .val(box.val()) 
                    ;
                    box.after(clone); //append as close to the box as possible for best CSS matching for clone
                    do { //reduce height until they don't match
                        newHeight = clone[0].scrollHeight - 1;
                        clone.innerHeight(newHeight);
                    } while (newHeight === clone[0].scrollHeight);
                    newHeight++; //adding one back eliminates a wiggle on deletion 
                    clone.remove();
                    box.focus(); // Fix issue with Chrome losing focus from the textarea.
                    
                    //if user selects all and deletes or holds down delete til beginning
                    //user could get here and shrink whole box
                    newHeight < minHeight && (newHeight = minHeight);
                    oldHeight > newHeight && opts.animate ? box.stop().animate({height: newHeight}, opts.speed) : box.innerHeight(newHeight);
                } else { //just set to the minHeight
                    box.innerHeight(minHeight);
                }
            } 
        }
        return that;
    }
})(jQuery);
$('.autgr').autogrow({onInitialize: true});
$('textarea').on('keyup', function(){
    $(this).val($(this).val().replace(/\n\s*\n/g, '\n'));
    $(this).val($(this).val().replace(/  +/g, ' '));
});

$(".tagfy").chosen({
  disable_search_threshold: 5,
  no_results_text: "Aucun résultat trouvé!",
  inherit_select_classes: true,
  max_selected_options: 5,
  single_backstroke_delete: false,
  display_selected_options: false,
  width: "100%"
});
$("label.rd").on('click', function() { // rd stands for Radio button
    var parent = $(this).closest('div');
    $("label.rd", parent).addClass('dd'); // dd means disabled
    $(this).removeClass('dd');
    $(this).addClass('sd');
});
/*$("label.cb").on('click', function() { // cb stands for Checkbox
    var parent = $(this).closest('div');
    $('label.cb', parent).removeClass('ed'); // ed means enabled
    $('label.cb', parent).addClass('dd');
    $(this).removeClass('dd');
    $(this).addClass('ed');
});*/
$(document).ready(function() { // show more fields in adding a question related to a medical case post
    /*var x = 3;
    $('.ans span:lt(' + x + ')').show();*/

    var last = $('.ans span > input');
    $(last).focus(function() {
        $(this).parent().next().show();
    });
});
$('#pt2 .add').on('click', function() {
    var quest = $(this).attr('link');
    $(this).hide();
    $(quest).show();
});
$('#q1 > .close').on('click', function() {
    // var quest = $(this).attr('link'); or this.closest
    $('#q1 :input').val('');
    $('#q1').hide();
    $("[link='#q1']").show();
});
$('#q2 > .close').on('click', function() {
    $('#q2 :input').val('');
    $('#q2').hide();
    $("[link='#q2']").show();
});
$(".cbs, .cb, .check").on('click', function() {
    $(this).toggleClass('true');
});

$(".rd").on('click', function() { // radio button
    var parent = $(this).closest('.rcont'); // radio cont
    $(".rd", parent).removeClass('true');
    $(this).addClass('true');
});
// POST CREATE END


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