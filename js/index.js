
//replaces the quote on the page
function newQuote(){
$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
  $("#quote").html(json.quote);
  $("#author").html(json.author);
  });
};  

//Opens a window to tweet the quote
function tweetQuote(){
window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text() + " -" + $("#author").text()); 
}

//Does the work, immediately adds new quote on page load and listens and responds to button clicks
$(document).ready(function() {
newQuote();   
$("#change-button").on("click", newQuote);   
$("#twitter").on("click", tweetQuote);      
});