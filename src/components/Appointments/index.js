// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
    isStarred: false,
    starBtn: 'inactive',
    starredList: [],
  }

  onClickStrBtn = () => {
    this.setState(prevState => ({
      starBtn: prevState.starBtn === 'active' ? 'inactive' : 'active',
      starredList: [
        ...prevState.appointmentsList.filter(each => each.isStarred),
      ],
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppoint = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppoint],
      title: '',
      date: '',
    }))
  }

  render() {
    const {appointmentsList, title, date, starBtn, starredList} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="card-up">
            <div className="img-inputs-con">
              <div className="inputs-con">
                <h1>Add Appointment</h1>
                <form className="apoint-form" onSubmit={this.onAddAppointment}>
                  <div>
                    <label htmlFor="aa">TITLE</label>
                    <input
                      id="aa"
                      type="text"
                      onChange={this.onChangeTitle}
                      placeholder="Title"
                      value={title}
                      className="title-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="bb">DATE</label>
                    <input
                      id="bb"
                      type="date"
                      onChange={this.onChangeDate}
                      placeholder="Title"
                      value={date}
                      className="date-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="add-btn"
                  >
                    Add
                  </button>
                </form>
              </div>
              <div className="img-con">
                <img
                  className="appointment-img"
                  src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                  alt="appointments"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="appo-con">
            <div className="con">
              <h1>Appointments</h1>
              <button
                className="str-bttn"
                onClick={this.onClickStrBtn}
                type="button"
                testid="star"
              >
                Starred
              </button>
            </div>
            <ul className="ull">
              {starBtn === 'active'
                ? starredList.map(each => (
                    <AppointmentItem
                      key={each.id}
                      appointmentDetails={each}
                      onDeleteAppointment={this.onDeleteAppointment}
                      toggleIsStarred={this.toggleIsStarred}
                    />
                  ))
                : appointmentsList.map(each => (
                    <AppointmentItem
                      key={each.id}
                      appointmentDetails={each}
                      onDeleteAppointment={this.onDeleteAppointment}
                      toggleIsStarred={this.toggleIsStarred}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
