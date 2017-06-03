import React from 'react';
import { render } from 'react-dom';
import FlashcardApp from 'react-flashcard-app';
import { cards } from './chinese_english';

const data = {
  id: 1,
  name: 'Chinese-English',
  cards,
};


document.addEventListener('DOMContentLoaded', () => {
  const flashcardEl = document.getElementById('flashcards');
  render(<FlashcardApp data={data} />, flashcardEl);
});
