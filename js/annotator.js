(function ($) {
  Drupal.behaviors.annotator = {
    attach: function (context, settings) {
      Drupal.Annotator = $('article.node').annotator();
    }
  };
})(jQuery);
