// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  OnText = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="calculator-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="para" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.OnText}
                className="box"
                value={searchInput}
              />
            </div>
            <div>
              <p type="button" className="btn">
                No.of Letters: {searchInput.length}
              </p>
            </div>
          </div>
          <div>
            <img
              alt=" letters calculator"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
