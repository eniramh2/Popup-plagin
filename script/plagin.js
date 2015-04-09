(function($) {
    $.fn.popupPlugin = function(object) {

        var popup = $(this);
        var timer;
        var settings = {};
        var open = {};
        var close = {};


        $('#overlay').remove();
        popup.addClass("popupwrapper");


        /////////////////////////////////////////////////////////////////////////Animation Types//////////////////////////////
        open = {
            top: function(elem) {
                elem.css({
                    'top': '-100%',
                    'left': '50%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'top': '50%'
                });
            },
            bottom: function(elem) {
                elem.css({
                    'top': '200%',
                    'left': '50%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'top': '50%'
                });
            },
            left: function(elem) {
                elem.css({
                    'left': '-100%',
                    'top': '50%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'left': '50%'
                });
            },
            right: function(elem) {
                elem.css({
                    'left': '-100%',
                    'top': '50%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'left': '50%'
                });
            },
            none: function(elem) {
                elem.css({
                    'left': '50%',
                    'top': '50%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
            }
        };




        close = {
            top: function(elem) {
                elem.animate({
                    'top': '-100%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                });
            },
            bottom: function(elem) {
                elem.animate({
                    'top': '200%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                });
            },
            left: function(elem) {
                elem.animate({
                    'left': '-100%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                });
            },
            right: function(elem) {
                elem.animate({
                    'left': '200%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                });
            },
            none: function(elem) {
                elem.css({
                    'display': 'none',
                    'left': '50%',
                    'top': '50%'
                });
            }
        };




        function onClose() {

            clearTimeout(timer);
            $(document).unbind('keyup', keyUpFunc);
            $('.colseXIcone').unbind('click', onClose);
            $('#overlay').unbind('click', onClose);

            $("#overlay").fadeOut();       

            close[settings['onClose']['animateCloseing']](popup);
        }




        settings = {
            'animateOpening': 'none',
            'closeEsc': true,
            'overlay': true,
            'modal': true,
            'autoclose': false,
            'timeout': 3000,
            'onClose': {
                'animateCloseing': 'none'
            },
            'title': ' ',
            'content': ' ',
            'buttons': {
                'close': {
                    'style': 'simple', 
                    'action': function() {
                        onClose();
                    }
                }
            }
        };

        $.extend(settings, object);

        popup.empty();
        popup.append('<div class="popupHeader"><span class = "colseXIcone"><span></div><div class="popupContent">' + settings['content'] + '</div><div class="popupFooter"></div>');
        $('.popupHeader').append("<span class = 'popupPluginTitle'>" + settings['title'] + "</span>");
        if (settings['overlay']) {
            popup.before('<div id="overlay" class = "box" ></div>');
        }

        for (key in settings['buttons']) {
            (function() {
                if ('action' in settings['buttons'][key]) {
                    var action = settings['buttons'][key]['action'];
                } else {
                    var action = onClose;
                }
                if ('style' in settings['buttons'][key]) {
                    var style = settings['buttons'][key]['style'];
                }
                else var style = "simple";
                $('.popupFooter').append("<button class = 'popupBtn "+style+"' id = '" + key + "'>" + key + "</button>");
                $('#' + key).click(function() {
                    action();
                });
            }());
        }
        popup.css({
            'margin-left': -popup.width() / 2 + "px",
            'margin-top': -popup.height() / 2 + "px"
        });
        //////////////////////////////////////////////////////////opening/////////////////////////////////////////
        open[settings['animateOpening']](popup);

        //////////////////////////////////////////////////////////closing //////////////////////////////

        if (settings['closeEsc']) {
            function keyUpFunc(e) {
                if (e.keyCode == 27) {
                    onClose();
                }
            }
            $(document).keyup(keyUpFunc);
        }


        $('.colseXIcone').bind('click', onClose);

        if (!settings['modal']) {
            $('#overlay').bind('click', onClose)
        }
        if (settings['autoclose']) {
            timer = setTimeout(function() {
                onClose()
            }, settings['timeout']);
        }


    };
})(jQuery);