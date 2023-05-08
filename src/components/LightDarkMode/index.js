// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  buttonClick = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    const buttonText = mode ? 'Light Mode' : 'Dark Mode'
    const modeName = mode ? 'dark-mode' : 'light-mode'

    return (
      <div className="container">
        <div className={modeName}>
          <h1>Click To Change Mode</h1>
          <div className="button-container">
            <button type="button" className="button" onClick={this.buttonClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
