"use strict";

(function ($) {
    $.fn.bidirectionalScrollingTable = function (schema) {

        if (schema === undefined) {
            return this.data("widget");
        }
        return this.each(function (index, elem) {
            $(elem).html("BiDirectionalScrollingTable");
        });
    };
})(jQuery);



