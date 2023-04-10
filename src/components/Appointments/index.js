// Write your code here
import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    titleInput: '',
    dateInput: '',
  }

  onDeleteUnstarredItem = () => {
    const {appointmentsList} = this.state
    const filteredList = appointmentsList.filter(eachItem => {
      if (eachItem.isStarred === true) {
        return eachItem
      }
      return eachItem
    })
    this.setState({
      appointmentsList: filteredList,
    })
  }

  onGettingStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  onAddingAppointments = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state

    const date = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')

    const newAppointment = {
      id: uuidv4(),
      titleInput,
      dateInput: date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeDateInput = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  render() {
    const {appointmentsList, titleInput, dateInput} = this.state
    return (
      <div className="main-bg-container">
        <div className="main-cards-bg-container">
          <div className="form-and-image-container">
            <form
              className="form-container"
              onSubmit={this.onAddingAppointments}
            >
              <h1 className="main-heading">Add Appointment</h1>
              <div className="inputs-container">
                <label htmlFor="forTextInput" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="forTextInput"
                  className="title-input"
                  placeholder="Title"
                  onChange={this.onChangeTitleInput}
                  value={titleInput}
                />
              </div>
              <div className="inputs-container">
                <label htmlFor="forDateInput" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  id="forDateInput"
                  className="date-input"
                  onChange={this.onChangeDateInput}
                  value={dateInput}
                />
              </div>
              <button type="submit" className="add-button" data-testid="star">
                Add
              </button>
            </form>
            <div className="appointment-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointment-image"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="starred-container">
            <h2 className="second-main-heading">Appointments</h2>
            <button
              type="button"
              className="starred-button"
              onClick={this.onDeleteUnstarredItem}
            >
              Starred
            </button>
          </div>
          <ul className="appointment-main-container">
            {appointmentsList.map(eachItem => (
              <AppointmentItem
                appointmentsDetails={eachItem}
                key={eachItem.id}
                onGettingStarred={this.onGettingStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
