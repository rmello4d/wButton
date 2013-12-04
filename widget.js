WAF.define('wButton', function() {
    "use strict";
    var Widget = WAF.require('waf-core/widget');

    var widget = Widget.create('wButton', WAF.require('wText'));

    widget.tagname = 'button';
    widget.removeClass('waf-wtext');

    widget.inherit(WAF.require('waf-behavior/focus'));

    widget.autoFireDomEvent('mousedown', 'action');

    return widget;
});
