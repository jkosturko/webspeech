$el = [];
if (!NYTD.jQuery) {
  NYTD.jQuery = $;
  $el = NYTD.jQuery('.quick-navigation');
}
else
$el = NYTD.jQuery('#masthead-buttons-container');

NYTD.jQuery('head').append('<link rel="stylesheet" href="http://www.nytimes.com/webspeech/style.css" type="text/css" />');


url: "http://www.nytimes.com/webspeech/webspeech.js",

NYTD.jQuery.ajax({
  url: "http://www.nytimes.com/webspeech/webspeech.js",
  success: function(data) {
      NYTD.jQuery.ajax({
          url: "http://www.nytimes.com/webspeech/sayWhatNYT.html",
          success: function(data) {

              if (NYTD.jQuery('#webspeech').length == 0)
                 $el.prepend('<div id="webspeech" class="webspeech"> </div>');

              NYTD.jQuery('#webspeech').html(data);
          }
        })
          .done(function( data ) {
            if ( console && console.log ) {
              console.log( "Sample of data:", data.slice( 0, 100 ) );
            }
          });
    }

})


