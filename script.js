function getQuote(){
  $.get("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data){
    let quote = data.quote;
    let author = data.author;
    $('#quote').text(quote);
    $('#author').text(author);
  })
}

$("#newQuote").click(getQuote);

getQuote();
