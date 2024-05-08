

let btn = document.getElementById('dice');
let par = document.getElementById('par');
let number = document.getElementById('num');

let quotes = [

  'It usually takes more than three weeks to prepare a good impromptu speech.Mark Twain (1835 - 1910)',
  
  'To win without risk is to triumph without glory. Pierre Corneille (1606 - 1684)',


  'I will never be an old man. To me, old age is always 15 years older than I am. Bernard M. Baruch (1870 - 1965)',

  'Innovation has nothing to do with how many R&D dollars you have. When Apple came up with the Mac, IBM was spending at least 100 times more on R&D. Its not about money. Its about the people you have, how youre led, and how much you get it. Steve Jobs',

  'Indecision may or may not be my problem.Jimmy Buffett',

  'Heroing is one of the shortest-lived professions there is. Will Rogers (1879 - 1935)', 

  'The kind of beauty I want most is the hard-to-get kind that comes from within - strength, courage, dignity. Ruby Dee',

  'Open your mouth and purse cautiously, and your stock of wealth and reputation shall, at least in repute, be great.Johann Georg von Zimmermann',

];

btn.addEventListener('click', function(){
  let random = quotes[Math.floor(Math.random() * quotes.length)];

  par.innerHTML = random;

  number.innerHTML = Math.floor(Math.random() * 8) + 1;  
});