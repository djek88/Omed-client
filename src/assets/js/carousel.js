;
(function(factory) {
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            module.exports = factory(require('jquery'));
        } else {
            factory(jQuery);
        }
    }
(function($) {
    var pluginName = "Carousel";

    function Plugin($container, options) {

        this._name = pluginName;

        var _ = this,
            carousel, list, state, limit, transx, widthbtn0, widthbtn1, step0, step1, prev, next;

        function _initialize() {

            if (!Object.freeze) {
                return;
            }
            _.carousel = $container;

            if (!_.carousel) {
                return;
            }
            _.list = _.carousel.find('ul')[0];

            if (!_.list) {
                return;
            }

            var noelements = $(_.list).children().length;
            if ((_.carousel.hasClass("imgx") && noelements <= 1) || (_.carousel.hasClass("filex") && noelements <= 3)) {
                return;
            }

            var elementwidth = 0;
            if (_.carousel.hasClass("imgx")) {
                elementwidth = 350;
            } else if (_.carousel.hasClass("filex")) {
                elementwidth = 162;
            }
            var elementmargin = 15;

            var totalwidth = elementmargin + (noelements * (elementmargin + elementwidth));
            if (totalwidth <= 633) {
                return;
            }

            var novisible = Math.floor(633 / (elementwidth + elementmargin));
            _.widthbtn1 = (633 - (novisible * (elementwidth + elementmargin)) - elementmargin) / 2;
            _.step1 = elementwidth + elementmargin;
            _.widthbtn0 = 633 - (novisible * (elementwidth + elementmargin)) - elementmargin;
            _.step0 = elementwidth + elementmargin - _.widthbtn1;

            _.state = 0;
            _.transx = 0;
            _.limit = noelements - novisible;
            _.carousel.append('<button class="prev" style="display:none;"></button><button class="next" style="width=' + _.widthbtn0 + ';"></button>');
            _.prev = _.carousel.children('.prev')[0];
            _.next = _.carousel.children('.next')[0];

            _.list.style.width = totalwidth + 'px';
            $(_.next).css('width' , _.widthbtn0 + 'px');
            $(_.prev).click(slideLeft);
            $(_.next).click(slideRight);

            return _;
        }

        function slideRight() {
            if (_.state === 0 && _.state != _.limit - 1) {
                _.transx = _.transx - _.step0 ;
                $(_.list).css('transform',  'translateX(' + _.transx + 'px)');
                $(_.prev).show();
                $(_.prev).add(_.next).css('width' , _.widthbtn1 + 'px');
                _.state++;
            }
            else if (_.state === 0 && _.state === _.limit - 1) {
                _.transx = _.transx - _.widthbtn1 ;
                $(_.list).css('transform',  'translateX(' + _.transx + 'px)');
                $(_.prev).show();
                $(_.prev).css('width' , _.widthbtn0 + 'px');
                $(_.next).hide();
                _.state++;
            }
            else if (_.state > 0 && _.state < _.limit - 1) {
                _.transx = _.transx - _.step1;
                $(_.list).css('transform', 'translateX(' + _.transx + 'px)');
                _.state++;
            } 
            else if (_.state === _.limit - 1) {
                _.transx = _.transx - _.step0;
                $(_.list).css('transform', 'translateX(' + _.transx + 'px)');
                $(_.next).hide();
                $(_.prev).css('width', _.widthbtn0 + 'px');
                _.state++;
            }
        }

        function slideLeft() {
            if (_.state === _.limit && _.state != 1) {
                _.transx = _.transx + _.step0 ;
                $(_.list).css('transform',  'translateX(' + _.transx + 'px)');
                $(_.next).show();
                $(_.prev).add(_.next).css('width' , _.widthbtn1 + 'px');
                _.state--;
              }
            else if (_.state === _.limit && _.state === 1) {
                _.transx = _.transx + _.widthbtn1 ;
                $(_.list).css('transform',  'translateX(' + _.transx + 'px)');
                $(_.next).show();
                $(_.next).css('width' , _.widthbtn0 + 'px');
                $(_.prev).hide();
                _.state--;
              }
              else if (_.state > 1 && _.state <= _.limit - 1) {
                _.transx = _.transx + _.step1;
                $(_.list).css('transform', 'translateX(' + _.transx + 'px)');
                _.state--;
            } else if (_.state === 1) {
                _.transx = _.transx + _.step0;
                $(_.list).css('transform', 'translateX(' + _.transx + 'px)');
                $(_.prev).hide();
                $(_.next).css('width', _.widthbtn0 + 'px');
                _.state--;
            }
        }

        return _initialize();
    }

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin($(this), options));
            }
        });
    };
    $('.icnt').Carousel();
}));