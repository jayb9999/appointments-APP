// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred, onDeleteAppointment} = props
  const {id, title, date, isStarred} = appointmentDetails

  const onClickStarIcon = () => {
    toggleIsStarred(id)
  }

  const onClickDelete = () => {
    onDeleteAppointment(id)
  }

  return (
    <li className="list-item">
      <div className="tt-con">
        <p>{title}</p>
        <button
          className="btn"
          onClick={onClickStarIcon}
          testid="star"
          type="button"
        >
          <img
            src={
              isStarred
                ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
            }
            alt="star"
          />
        </button>
      </div>
      <p>{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
    </li>
  )
}

export default AppointmentItem
