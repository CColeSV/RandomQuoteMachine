// quote = fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
//     .then(function(response) {
//         console.log('response.json', response.json());
//         return response.json();
//     })


const quoteArray = [
    {
        quote:"This is quote 0",
        author: "Hakeem Olajuwan"
    },
    {
        quote:"This is quote 1",
        author: "Hakeem Stewart"
    },
    {
        quote:"This is quote 2",
        author: "Hakeem Roberts"
    },
    {
        quote:"This is quote 3",
        author: "Hakeem Johnson"
    },
    {
        quote:"This is quote 4",
        author: "Hakeem Bravo"
    },
    {
        quote:"This is quote 5",
        author: "Hakeem Blue"
    },
    {
        quote:"This is quote 6",
        author: "Hakeem Red"
    },
];

let randomText = document.getElementById("text");
let randomAuthor = document.getElementById("author");



function randomQuote() {
    //get random number - 5
    //change inner html of text  quoteArray[5]
    //change inner html of author quoteArray[5]

    // return quoteArray[Math.floor(Math.random() * quoteArray.length)];
 }
  


const brandNewText = "This is my brand new text";

function newText() {
    let randomNumber = Math.floor(Math.random() * quoteArray.length);
    randomText.innerHTML = quoteArray[randomNumber].quote;    
    randomAuthor.innerHTML = quoteArray[randomNumber].author;
}
