(function(widget) {
    widget.setWidth(92);
    widget.setHeight(22);

    widget.setPanelStyle({
        fClass: true, //This property is for the design panel
        text: true,
        background: true,
        border: true,
        sizePosition: true,
        shadow: true,
        textShadow: true,
        innerShadow: true,
        label: false
    });

    widget.addStates('hover', 'active', 'focus', 'disabled');
});
