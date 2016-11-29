var message = '';
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Gets random quote
function getRandomQuote () {
  var pickQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return pickQuote;
}

//print quote to html
function printQuote(message) {
  var getQuote = getRandomQuote();
  message += '<p class ="quote">' + getQuote.quote  + '</p>';
  message += '<p class ="source">' + getQuote.source  + '</p>';
  document.getElementById('quote-box').innerHTML = message;

}
