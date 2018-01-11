var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function getQuote(){
  $.get("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data){
    var quote = data.quote;
    var author = data.author;
    $("#tweet").attr("href", tweet(quote, author));
    $('#quote').text(quote);
    $('#author').text(`- ${author}`);
  })
  var color = colors[Math.floor(Math.random() * colors.length)];
  console.log(color);
  $("body").animate({backgroundColor: color, color: color}, "slow");
  $("button").animate({backgroundColor: color}, "slow");
  $("i").animate({color: color}, "slow");
}

function tweet(quote, author){
  var twitterURL = `https://twitter.com/intent/tweet?text="`;
  twitterURL += encodeURIComponent(quote) +'" - '+ encodeURIComponent(author);
  return twitterURL;
}

$("#newQuoteDesktop").click(getQuote);
$("#newQuoteMobile").click(getQuote);

getQuote();
