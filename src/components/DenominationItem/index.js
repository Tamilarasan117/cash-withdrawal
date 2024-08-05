import './index.css'

const DenominationItem = (props) => {
  const {rupeeDetails,cashWithdraw} = props
  const onCashWithdraw = () => {
    cashWithdraw(rupeeDetails.value)
  }
  return (
    <li className="rupee-list">
      <button
        type="button"
        className="button"
        onClick={onCashWithdraw}
      >
        {rupeeDetails.value}
      </button>
    </li>
  )
}

export default DenominationItem