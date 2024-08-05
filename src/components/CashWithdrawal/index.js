import './index.css'
import DenominationItem from '../DenominationItem'
import {Component} from 'react'

class CashWithdrawal extends Component {
  state = {rupee: 2000}

  cashWithdraw = (value) => {
    const {rupee} = this.state
    const updateCash = rupee - value
    this.setState({rupee: updateCash})
  }

  render() {
    const {rupee} = this.state
    const {denominationsList} = this.props
    return (
      <div className="cash-withdrawal-container">
        <div className="main-container">
          <div className="logo-card">
            <p className="logo">S</p>
            <h1 className="logo-heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="balance">{rupee}</p>
              <p className="text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="sum-text">Choose Sum (In Rupees)</p>
            <ul className="rupee-container">
              {
                denominationsList.map(eachRupee => (
                  <DenominationItem
                    rupeeDetails={eachRupee}
                    cashWithdraw={this.cashWithdraw}
                    key={eachRupee.id}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal