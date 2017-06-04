import React from 'react';
import { cards } from './chinese_english';
import FlashcardApp from 'react-flashcard-app';

let englishChinese = [];
for (let i = 0; i < cards.length - 1; i++) {
  englishChinese.push(cards[i + 1]);
  englishChinese.push(cards[i]);
  i += 1;
}

window.cards = cards;
window.ec = englishChinese;


const data = {
  id: 1,
  name: 'English-Chinese',
  cards: englishChinese,
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.keysPressed = new Set;
  }

  handleKeyCombo(e) {
    if (this.keysPressed.has(18) && this.keysPressed.has(49)) {
      e.preventDefault();
      document.getElementsByClassName('decrement')[0].click();
    }
    if (this.keysPressed.has(18) && this.keysPressed.has(50)) {
      e.preventDefault();
      this.setState({
        value: '',
      });
      document.getElementsByClassName('increment')[0].click();
    }
    if (this.keysPressed.has(18) && this.keysPressed.has(51)) {
      e.preventDefault();
      document.getElementsByClassName('flip')[0].click();
    }
  }

  componentDidMount() {
    const that = this;
    document.addEventListener('keydown', e => {
      that.keysPressed.add(e.which);
      that.handleKeyCombo.bind(that)(e);
    });
    document.addEventListener('keyup', e => {
      that.keysPressed.delete(e.which);
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const card = document.querySelector('div[data-is-current="true"');
    let answer = card.querySelector('div.back > .card-text').innerText;
    answer = answer.replace(/[\(\)]/g, '');
    const curInput = document.getElementById('input').value;
    const pattern = new RegExp(curInput + '\\b', 'i');
    if ((answer === curInput) || (answer.match(pattern) && curInput !== '')) {
      document.getElementsByClassName('remove')[0].click();
      this.setState({
        value: '',
      });
    }
  }

  render () {
    return(
      <div>
        <FlashcardApp data={data} />
        <form
          id="form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input
            id="input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            />
          <button
            className="check"
          >Check
          </button>
        </form>
      </div>
    );
  }
}
