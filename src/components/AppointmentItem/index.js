// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentsDetails, onGettingStarred} = props
  const {id, titleInput, dateInput, isStarred} = appointmentsDetails

  const activeStarUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickingStarButton = () => {
    onGettingStarred(id)
  }

  return (
    <li className="list-item-container">
      <div className="title-date-result-container">
        <p className="title-name">{titleInput}</p>
        <p className="date-selected">{dateInput}</p>
      </div>
      <button
        type="button"
        className="star-button"
        onClick={onClickingStarButton}
      >
        <img src={activeStarUrl} alt="star" className="star-image" />
      </button>
    </li>
  )
}

export default AppointmentItem
