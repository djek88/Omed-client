(function ( $ ) {
    $.fn.rdm = function(options) {

        if ($(this).outerHeight() >= 400) {
            var h = $(this).outerHeight();
            this.css( "height", 200 );
            this.css( "overflow", "hidden" );
            this.css( "position", "relative" );
            this.append('<p class="rmore"><a href="#">Read more</a></p>');

            var rbutton = this.find('.rmore');
            rbutton.click(function(){
                    totalHeight = 0;

                    $up = $(this).parent();

                    $up
                        .css({
                            // Set height to prevent instant jumpdown when max height is removed
                            // "height": $up.height(),
                            "max-height": 9999
                        })
                        .animate({
                            "height": h
                        });

                    // fade out read-more
                    $(this).remove();

                    // prevent jump-down
                    return false;
            })
            return this;
        }
    };
    $('.article').rdm();
}( jQuery ));

