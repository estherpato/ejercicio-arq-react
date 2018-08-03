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

    this.metodoRandom = this.metodoRandom.bind(this)
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
        }, this.metodoRandom);
      })
  }

  metodoRandom() {
    console.log('hola', this.state.arrayUsers.gender)
  }

  render() {
    return (
      <div className="App">
        <PersonList
         
        />
      </div>
    );
  }
}

export default App;
