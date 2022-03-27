var quotesContainer = [
   
   
  {
    'quote':  'Be yourself; everyone else is already taken.',
    'author':'Oscar Wilde'
  }

    ,
    {
        'quote':  'I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.',
        'author':' Marilyn Monroe'
      }
    
    ,
    {
        'quote':  'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
        'author':'Albert Einstein'
      }
     

    ,
    {
        'quote':  'So many books, so little time. ',
        'author':'Frank Zappa'
     } 

    ,
      
  {
    'quote': 'A room without books is like a body without a soul.',
    'author':' Marcus Tullius Cicero'
  }

    ,
    {
        'quote': 'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.',
        'author':'Bernard M. Baruch'
      }
    
     

];



function printQuote(){

    var random= Math.floor(Math.random()* (quotesContainer.length) );
    document.getElementById('quoteParaghraph').innerHTML= quotesContainer[random].quote;
    document.getElementById('authorParaghraph').innerHTML= quotesContainer[random].author;
}

