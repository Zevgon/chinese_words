import React from 'react';
import { cards } from './chinese_english';
import FlashcardApp from 'react-flashcard-app';

const data = {
  id: 1,
  name: 'Chinese-English',
  cards,
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
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
    const answer = card.querySelector('div.back > .card-text').innerText;
    const curInput = document.getElementById('input').value;
    const pattern = new RegExp(curInput + '\\b', 'i');
    if (answer.match(pattern)) {
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
