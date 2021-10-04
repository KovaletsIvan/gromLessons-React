
import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      student: '',
      occupation: 'london',
      about: ''
    }

  }

  handleChange = (e) => {
    const name = e.target.name
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]: val
    })
  }


  render() {

    return (
      <form className="login-form" onSubmit={(e) => this.props.createUser(e, this.state)}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input" onChange={this.handleChange} value={this.state.name} type="text" id="name" name="name" />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">Student</label>
          <input className="form-input" onChange={this.handleChange} value={this.state.student} type="checkbox" id="student" name="student" />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
          <select name="occupation" className="form-input" onChange={this.handleChange} value={this.state.occupation}>
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">About</label>
          <textarea name="about" className="form-input" onChange={this.handleChange} value={this.state.about} />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    )
  }
}



export default UserForm



