
NYTD.jQuery.ajax({
  url: "http://www.nytimes.com/webspeech/webspeech.js",
  success: function(data) {
      console.log(data);
  }

})


NYTD.jQuery.ajax({
  url: "http://www.nytimes.com/webspeech/sayWhatNYT.html",
  success: function(data) {
      console.log(data);
  }

})
  .done(function( data ) {
    if ( console && console.log ) {
      console.log( "Sample of data:", data.slice( 0, 100 ) );
    }
  });
  
  
  
