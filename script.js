function getQuote(){
  $.get("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data){
    console.log(data);
  })
}

getQuote();
