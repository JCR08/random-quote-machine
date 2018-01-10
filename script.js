function getQuote(){
  $.get("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data){
    var quote = data.quote;
    var author = data.author;
    $("#tweet").attr("href", tweet(quote, author));
    $('#quote').text(quote);
    $('#author').text(`- ${author}`);
  })
}

function tweet(quote, author){
  var twitterURL = `https://twitter.com/intent/tweet?text="`;
  twitterURL += encodeURIComponent(quote) +'" - '+ encodeURIComponent(author);
  return twitterURL;
}

$("#newQuoteDesktop").click(getQuote);
$("#newQuoteMobile").click(getQuote);

getQuote();
