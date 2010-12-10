/**
 * Placeholder label
 * Copyright (c) 2010 Able Technology Consulting Limited
 * http://www.abletech.co.nz/
 */
(function($) {
  $.fn.placeholderLabel = function(options) {
    var config = {
      placeholder_class : 'placeholder'
    };

    if (options) $.extend(config, options);

    // detect modern browsers
    var dummy = document.createElement('input');
    if(dummy.placeholder != undefined){
      return this;
    }

    this.each(function() {
      var input = $(this);

      input.focus(function(){
        if($(this).val() == $(this).attr('placeholder')){
          $(this).val('').removeClass(config.placeholder_class);
        }
      });

      input.blur(function(){
        if($(this).val() == ''){
          $(this).val($(this).attr('placeholder')).addClass(config.placeholder_class);
        }
      });

      input.triggerHandler('focus');
      input.triggerHandler('blur');
    });
    
    return this;
  }
})(jQuery);