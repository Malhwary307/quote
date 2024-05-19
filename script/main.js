var quotes = [
  " “So many books, so little time.” - Frank Zappa ",
  " “If you tell the truth, you don't have to remember anything.” - Mark Twain",
  " “In three words I can sum up everything I've learned about life: it goes on.” - Robert Frost",
  " “Stay hungry, stay foolish.” - Steve Jobs",
  " “The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela",
  " “The way to get started is to quit talking and begin doing.” - Walt Disney",
  " “A room without books is like a body without a soul.” - Marcus Tullius Cicero"
];


   // Function to generate random quote
   function generateRandomQuote() {
    var quoteElement = document.getElementById("quote");

   
    if (quotes.length === 0) {
      quotes = [
        " “So many books, so little time.” - Frank Zappa ",
  " “If you tell the truth, you don't have to remember anything.” - Mark Twain",
  " “In three words I can sum up everything I've learned about life: it goes on.” - Robert Frost",
  " “Stay hungry, stay foolish.” - Steve Jobs",
  " “The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela",
  " “The way to get started is to quit talking and begin doing.” - Walt Disney",
  " “A room without books is like a body without a soul.” - Marcus Tullius Cicero"
];
    }

    var randomIndex = Math.floor(Math.random() * quotes.length);
    
    quoteElement.textContent = quotes[randomIndex];
    quotes.splice(randomIndex, 1);
  }





