import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || '',
            password: this.props.password || ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = () => {
        this.props.onFormSubmit({
          name: this.state.name,
          password: this.state.password
        });
      };

    render() {
        return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Name</label>
                <input
                  id='name-input'
                  type='text'
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div className='field'>
                <label>Password</label>
                <input
                  id='password-input'
                  type='text'
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </div>

              <div className='ui two bottom attached buttons'>
                <button
                  className='ui basic blue button'
                  onClick={this.handleSubmit}
                >
                  {submitText}
                </button>
                <button
                  className='ui basic red button'
                  onClick={this.props.onFormClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        );
    }
}