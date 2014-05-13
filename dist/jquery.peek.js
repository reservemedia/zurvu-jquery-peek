/*! Peek - v0.1.1 - 2014-05-13
* https://nrdobie.github.io/jquery-peek
* Copyright (c) 2014 Nicholas Dobie; Licensed MIT */
(function($) {

  var defaults, peek;

  // Collection method.
  $.fn.peek = function(options) {

    var settings = $.extend({}, defaults, options, {
      targetElements: this,
      currentDelta: 0,
      previousScroll: 0,
      previousDirection: null
    });

    settings.previousScroll = $(settings.triggerElement).scrollTop();

    $(settings.triggerElement).on('scroll.Peek', {settings: settings}, peek);

    return this;

  };

  defaults = {
    'showDirection':  'up',
    'toggleClass':    'hidden',
    'triggerDelta':   50,
    'triggerElement': window
  };

  peek = function (e) {

    var currentScroll = $(e.target).scrollTop(),
        settings = e.data.settings,
        delta = currentScroll - settings.previousScroll,
        directionality = (delta > 0) ? 'down' : 'up';


    if ( settings.previousDirection !== directionality ) {
      settings.currentDelta = 0;
    }

    settings.currentDelta += delta;

    if ( currentScroll <= 0 ) {
      settings.targetElements.removeClass(settings.toggleClass);
    }
    else if ( Math.abs(settings.currentDelta) > settings.triggerDelta ) {
      if ( directionality === settings.showDirection) {
        settings.targetElements.removeClass(settings.toggleClass);
      } else {
        settings.targetElements.addClass(settings.toggleClass);
      }
    }

    settings.previousDirection = directionality;
    settings.previousScroll = currentScroll;

  };

}(jQuery));
