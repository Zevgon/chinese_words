import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const flashcardEl = document.getElementById('flashcards');
  render(<App />, flashcardEl);
});
