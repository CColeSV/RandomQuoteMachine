quote = fetch()


const quoteArray = [
    "This is quote 0",
    "This is quote 1",
    "This is quote 2",
    "This is quote 3"
];

function randomQuote(quoteArray) {
    return quoteArray[Math.floor(Math.random() * quoteArray.length)];
 }


const brandNewText = "This is my brand new text";

function newText() {
    let randomText = document.getElementById("text"); 
    randomText.innerHTML = randomQuote;
    
}




// fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
//  .then(function(response) {
//      return response.json();
//  })


/* 
-=Within The Button=-
Randomize Text      using Math.floor + array  or  api
Change Background

Use Fetch
*/


console.log("text")