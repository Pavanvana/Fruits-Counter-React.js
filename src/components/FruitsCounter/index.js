// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-contaier">
        <div className="card">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-card">
              <img
                className="img-style"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onClickEatMango}
                className="button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                className="img-style"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.onClickEatBanana}
                className="button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
