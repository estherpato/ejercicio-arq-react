import React, { Component } from 'react';
import './App.css';
import PersonList from './components/PersonList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayUsers: [],
    }

    this.fetchRandomUser()

  }

  // name: `${name.title} ${name.first} ${name.last}`,
  // pic: picture.thumbnail,
  // city: location.city,
  // age: dob.age,
  // gender: gender,

  fetchRandomUser() {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => {
        return response.json();
      })

      .then((json) => {
        this.setState({
          arrayUsers: json.results
        });
      });

  }

  render() {
    return (
      <div className="App">
        <PersonList
          array={this.state.arrayUsers}
        />
      </div>
    );
  }
}

export default App;
