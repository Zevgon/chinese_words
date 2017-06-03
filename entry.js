import React from 'react';
import { render } from 'react-dom';
import FlashcardApp from 'react-flashcard-app';

const data = {
  id: 1,
  name: 'Example Deck',
  cards:
  [
    'Lorem', 'dolor',
    'sit', 'amet',
    'consetetur', 'sadipscing',
    'sed', 'diam',
  ],
};

// 
// document.addEventListener('DOMContentLoaded', () => {
//   const flashcardEl = document.getElementById('flashcards');
//   render(<FlashcardApp data={data} />, flashcardEl);
//   document.getElementsByClassName('flashcard-app')[0].style.height = '500px';
// });


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
