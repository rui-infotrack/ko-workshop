(function (ko) {
'use strict';

ko = 'default' in ko ? ko['default'] : ko;

var _this = undefined;
ko.components.register("ko-button", {
    viewMode: function (params) {
        _this.label = params.label;
    },
    template: "\n    <button class=\"button-outlined h6\" data-bind=\"text: label\"></button>\n  "
});

}(ko));
