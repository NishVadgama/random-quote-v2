
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Gets random quote using the Math.random function and stores it in pickQuote
function getRandomQuote () {
  var pickQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return pickQuote;
}

//print quote to html
function printQuote() {
  var getQuote = getRandomQuote();
  var message = '';
  message += '<p class ="quote">' + getQuote.quote  + '</p>';
  message += '<p class ="source">' + getQuote.source  + '</p>';
  message += '<p class ="tag">' + getQuote.tag  + '</p>';
  document.getElementById('quote-box').innerHTML = message;

}
